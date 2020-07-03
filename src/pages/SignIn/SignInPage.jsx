import React from 'react';
import useDocumentTitle from '@rehooks/document-title';

// * Components
import { SignInForm, Banner } from 'components';

// * Assets
import image from 'assets/images/banners/b-2';

// * Sass
import './SignInPage.scss';

const SignInPage = () => {
  useDocumentTitle('Newsier | Sign In');

  return <div className="page signInPage">
    <Banner image={image} title="sign in" />
    <SignInForm />
  </div>;
}

export default SignInPage;