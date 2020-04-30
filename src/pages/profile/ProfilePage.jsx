import React from 'react';

// * Components
import {
  BackButton,
  SignOutButton
} from 'components';

// * Sass
import './ProfilePage.scss';

const ProfilePage = () =>
  <div className="profilePage page">
    <div className="profilePage__btnSet">
      <BackButton />
      <SignOutButton />
    </div>
  </div>

export default ProfilePage;