import { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

import { LoadingPage } from '@layout/LoadingPage';

const Dashboard = lazy(() => import('@modules/Dashboard'));
const Consumers = lazy(() => import('@modules/Consumers'));

function Routes() {
  return (
    <>
      <Suspense fallback={<LoadingPage />}>
        <Switch>
          <Route path="/" exact component={Dashboard} />

          <Route path="/consumers" component={Consumers} />
        </Switch>
      </Suspense>
    </>
  );
}

export { Routes };
