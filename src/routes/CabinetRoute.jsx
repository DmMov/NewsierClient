import React, { Suspense, lazy } from 'react';
import { Route } from 'react-router-dom';

// * Components
import {
  RedirectChecker,
  Loader
} from 'components';

// * Pages
const CabinetPage = lazy(() => import('pages/cabinet/CabinetPage'));

// * Constants
import { profileRedirectParams } from 'assets/constants';

export const CabinetRoute = ({ publisher }) =>
  <Route
    path="/cabinet"
    component={
      () =>
        <RedirectChecker
          condition={publisher != null}
          component={
            () =>
              <Suspense fallback={<Loader />}>
                <CabinetPage />
              </Suspense>
          }
          redirectParams={profileRedirectParams}
        />
    }
  />