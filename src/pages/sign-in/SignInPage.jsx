import React from 'react';
import useDocumentTitle from '@rehooks/document-title';

// * Assets
import bannerImage from 'assets/images/banners/4';

// * Components
import {
  SignInForm,
  Banner
} from 'components';

// * Sass
import './SignInPage.scss';

const SignInPage = () => {
  useDocumentTitle('Newsier | Вхід');

  return (
    <div id="sign-in-page" className="page">
      <Banner
        image={bannerImage}
        title="вхід"
      />
      <SignInForm />
    </div>
  );
}

export default SignInPage;