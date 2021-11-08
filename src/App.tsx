import { ErrorBoundary } from 'react-error-boundary';
import { Provider as ReduxProvider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

import { Layout } from '@layout';
import { store } from '@store';
import { GlobalStyle } from '@styles/global';

const persistor = persistStore(store);

const ErrorHandler = () => {
  return (
    <div>
      <h2>Ups, sorry</h2>
      <h3>Something went wrong, but me are working to fix it!</h3>
    </div>
  );
};

const notifyError = (
  error: Error,
  info: {
    componentStack: string;
  },
) => {
  console.error(error, info);
};

function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorHandler} onError={notifyError}>
      <ReduxProvider store={store}>
        <PersistGate persistor={persistor}>
          <GlobalStyle />
          <Layout />
        </PersistGate>
      </ReduxProvider>
    </ErrorBoundary>
  );
}

export { App };
