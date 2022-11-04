import React from 'react';
import { PluginLayout } from '@erxes/ui/src/styles/main';
import { AppProvider } from 'coreui/appContext';
import GeneralRoutes from './generateRoutes';

const App = () => {
  return (
    <AppProvider>
      <PluginLayout>
        <GeneralRoutes />
      </PluginLayout>
    </AppProvider>
  );
};

export default App;