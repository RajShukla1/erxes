import { Document, Schema } from 'mongoose';
import { field, schemaWrapper } from './utils';

export interface IEmailTemplate {
  name: string;
  content: string;
  status?: string;
  createdAt?: Date;
  modifiedAt?: Date;
  createdBy?: string;
  tagIds?: string[];
  scopeBrandIds?: string[];
}

export interface IEmailTemplateDocument extends IEmailTemplate, Document {
  _id: string;
}

export const emailTemplateSchema = schemaWrapper(
  new Schema({
    _id: field({ pkey: true }),
    name: field({ type: String, label: 'Name' }),
    status: field({ type: String, label: 'Status' }),
    content: field({ type: String, optional: true, label: 'Content' }),
    tagIds: field({
      type: [String],
      optional: true,
      index: true,
      label: 'Tags'
    }),
    createdAt: field({
      type: Date,
      label: 'Created at'
    }),
    createdBy: field({ type: String, label: 'Created by' }),
    modifiedAt: field({ type: Date, label: 'Modified at' })
  })
);
