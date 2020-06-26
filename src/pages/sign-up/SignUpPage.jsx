import React from 'react';
import useDocumentTitle from '@rehooks/document-title';

// * Components
import {
  SignUpForm,
  Banner
} from 'components';

// * Assets
import image from 'assets/images/banners/b-3';

// * Sass
import './SignUpPage.scss';

const SignUpPage = () => {
  useDocumentTitle('Newsier | Sign Up');

  return <div className="page signUpPage">
    <Banner image={image} title="sign up" />
    <SignUpForm />
  </div>;
}

export default SignUpPage;