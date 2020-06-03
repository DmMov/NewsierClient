import React from 'react';
import useDocumentTitle from '@rehooks/document-title';

// * Components
import {
  SignInForm,
  Banner
} from 'components';

// * Assets
import image from 'assets/images/banners/b-2';

// * Sass
import './SignInPage.scss';

const SignInPage = () => {
  useDocumentTitle('Newsier | Вхід');

  return (
    <div className="page signInPage">
      <Banner
        image={image}
        title="вхід"
      />
      <SignInForm />
    </div>
  );
}

export default SignInPage;