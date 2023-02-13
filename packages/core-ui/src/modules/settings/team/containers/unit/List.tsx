import gql from 'graphql-tag';
import React from 'react';
import { useQuery } from '@apollo/client';

import Spinner from '@erxes/ui/src/components/Spinner';
import List from '../../components/unit/List';
import { queries } from '@erxes/ui/src/team/graphql';
import { __ } from 'modules/common/utils';
import Box from '@erxes/ui/src/components/Box';
import ErrorMsg from '@erxes/ui/src/components/ErrorMsg';
import { MenuFooter } from 'modules/settings/styles';

export default function ListContainer() {
  const listQuery = useQuery(gql(queries.units));

  if (listQuery.loading) {
    return <Spinner />;
  }

  if (listQuery.error) {
    return (
      <Box isOpen={true} title={__('Unit')} name="showUnit">
        <MenuFooter>
          <ErrorMsg>{listQuery.error.message}</ErrorMsg>
        </MenuFooter>
      </Box>
    );
  }

  return <List listQuery={listQuery} />;
}
