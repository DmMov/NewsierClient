import React from 'react';

// * Assets
import bannerImage from 'assets/images/banners/4';

// * Components
import {
  SignInModule,
  Banner
} from 'components';

// * Sass
import './SignInPage.scss';

export const SignInPage = () =>
  <div id="sign-in-page" className="page">
    <Banner
      image={bannerImage}
      title="вхід"
    />
    <SignInModule />
  </div>
