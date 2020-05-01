import React from 'react';

// * Components
import {
  BackButton,
  SignOutButton,
  Profile
} from 'components';

// * Sass
import './ProfilePage.scss';

const ProfilePage = () =>
  <div className="profilePage page">
    <div className="profilePage__btnSet">
      <BackButton />
      <SignOutButton />
    </div>
    <Profile />
  </div>

export default ProfilePage;