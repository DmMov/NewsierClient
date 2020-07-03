import React, { Suspense, lazy } from 'react';
import { Route } from 'react-router-dom';

// * Components
import { RedirectChecker, Loader } from 'components';

// * Pages
const CabinetPage = lazy(() => import(/* webpackChunkName: 'cabinet-page' */ 'pages/Cabinet/CabinetPage'));

// * Constants
import { profileRedirectParams } from 'assets/constants';

// * Utils
import { isEmpty } from 'utils/helpers';

export const CabinetRoute = ({ publisher }) =>
  <Route
    path="/cabinet"
    component={
      () =>
        <RedirectChecker
          condition={!!publisher && !isEmpty(publisher)}
          component={
            () =>
              <Suspense fallback={<Loader />}>
                <CabinetPage />
              </Suspense>
          }
          redirectParams={profileRedirectParams}
        />
    }
  />;