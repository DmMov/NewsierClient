import React from 'react';

// * Components
import {
  BackButton,
  SignOutButton,
  Profile,
  ProfileNav
} from 'components';

// * Routes
import { PublisherPublicationsRoute } from 'routes';

// * Sass
import './ProfilePage.scss';

const ProfilePage = () =>
  <div className="profilePage page">
    <div className="profilePage__btnSet">
      <BackButton />
      <SignOutButton />
    </div>
    <Profile />
    <ProfileNav />
    <PublisherPublicationsRoute />
  </div>

export default ProfilePage;