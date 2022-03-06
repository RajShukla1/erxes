import { graphqlPubsub } from './configs';
import { ConversationMessages, Conversations, Integrations } from './models';
import { CONVERSATION_STATUSES } from './models/definitions/constants';
import { Users } from './apiCollections';
import { sendContactRPCMessage } from './messageBroker';

const sendError = message => ({
  status: 'error',
  errorMessage: message
});

const sendSuccess = data => ({
  status: 'success',
  data
});

/*
 * Handle requests from integrations api
 */
export const receiveRpcMessage = async msg => {
  const { action, metaInfo, payload } = msg;
  const doc = JSON.parse(payload || '{}');

  if (action === 'get-create-update-customer') {
    const integration = await Integrations.findOne({
      _id: doc.integrationId
    });

    if (!integration) {
      return sendError(`Integration not found: ${doc.integrationId}`);
    }

    const { primaryEmail, primaryPhone } = doc;

    let customer;

    const getCustomer = async selector =>
      sendContactRPCMessage('findCustomer', selector);

    if (primaryPhone) {
      customer = await getCustomer({ primaryPhone });

      if (customer) {
        await sendContactRPCMessage('updateCustomer', {
          _id: customer._id,
          doc
        });
        return sendSuccess({ _id: customer._id });
      }
    }

    if (primaryEmail) {
      customer = await getCustomer({ primaryEmail });
    }

    if (customer) {
      return sendSuccess({ _id: customer._id });
    } else {
      customer = await sendContactRPCMessage('create_customer', {
        ...doc,
        scopeBrandIds: integration.brandId
      });
    }

    return sendSuccess({ _id: customer._id });
  }

  if (action === 'create-or-update-conversation') {
    const { conversationId, content, owner } = doc;

    let user;

    if (owner) {
      user = await Users.findOne({ 'details.operatorPhone': owner });
    }

    const assignedUserId = user ? user._id : null;

    if (conversationId) {
      await Conversations.updateConversation(conversationId, {
        content,
        assignedUserId
      });

      return sendSuccess({ _id: conversationId });
    }

    doc.assignedUserId = assignedUserId;

    const conversation = await Conversations.createConversation(doc);

    return sendSuccess({ _id: conversation._id });
  }

  if (action === 'create-conversation-message') {
    const message = await ConversationMessages.createMessage(doc);

    const conversationDoc: {
      status: string;
      readUserIds: string[];
      content?: string;
      updatedAt?: Date;
    } = {
      // Reopen its conversation if it's closed
      status:
        doc.unread || doc.unread === undefined
          ? CONVERSATION_STATUSES.OPEN
          : CONVERSATION_STATUSES.CLOSED,

      // Mark as unread
      readUserIds: []
    };

    if (message.content && metaInfo === 'replaceContent') {
      conversationDoc.content = message.content;
    }

    if (doc.createdAt) {
      conversationDoc.updatedAt = doc.createdAt;
    }

    await Conversations.updateConversation(
      message.conversationId,
      conversationDoc
    );

    graphqlPubsub.publish('conversationClientMessageInserted', {
      conversationClientMessageInserted: message
    });

    graphqlPubsub.publish('conversationMessageInserted', {
      conversationMessageInserted: message
    });

    return sendSuccess({ _id: message._id });
  }

  // if (action === 'get-configs') {
  //   const configs = await getConfigs({ Configs }, inmemoryStorage);
  //   return sendSuccess({ configs });
  // }

  if (action === 'getUserIds') {
    const users = await Users.find({}, { _id: 1 });
    return sendSuccess({ userIds: users.map(user => user._id) });
  }
};

/*
 * Integrations api notification
 */
export const receiveIntegrationsNotification = async msg => {
  const { action } = msg;

  if (action === 'external-integration-entry-added') {
    graphqlPubsub.publish('conversationExternalIntegrationMessageInserted', {});

    return sendSuccess({ status: 'ok' });
  }

  if (action === 'sync-calendar-event') {
    graphqlPubsub.publish('calendarEventUpdated', {});

    return sendSuccess({ status: 'ok' });
  }
};

/**
 * Remove engage conversations
 */
export const removeEngageConversations = async _id => {
  await Conversations.removeEngageConversations(_id);
};

export const collectConversations = async ({ contentId, contentType }) => {
  const results: any[] = [];
  const conversations = await Conversations.find({
    $or: [{ customerId: contentId }, { participatedUserIds: contentId }]
  }).lean();

  for (const c of conversations) {
    results.push({
      _id: c._id,
      contentType: 'conversation',
      contentId,
      createdAt: c.createdAt
    });
  }

  // if (contentType === 'customer') {
  // let conversationIds;

  // try {
    // ! msg broker
  //   conversationIds = await dataSources.IntegrationsAPI.fetchApi(
  //     '/facebook/get-customer-posts',
  //     {
  //       customerId: contentId
  //     }
  //   );
  //   collectItems(
  //     await Conversations.find({ _id: { $in: conversationIds } }).toArray(),
  //     'comment'
  //   );
  // } catch (e) {
  //   debugExternalApi(e);
  // }
  // }

  return results;
};
