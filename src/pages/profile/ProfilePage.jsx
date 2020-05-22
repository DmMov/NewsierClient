import React from 'react';
import { useSelector } from 'react-redux';
import useDocumentTitle from '@rehooks/document-title';

// * Routes
import { OwnPublicationsRoute } from 'routes';

// * Components
import {
  BackButton,
  SignOutButton,
  ProfileCard,
  ProfileNav
} from 'components';

// * Selectors
import { selectPublisher } from 'utils/selectors';

// * Sass
import './ProfilePage.scss';

const ProfilePage = () => {
  const publisher = useSelector(selectPublisher);
  useDocumentTitle(`Newsier | Профіль ${publisher.name} ${publisher.surname}`);

  return (
    <div className="profilePage page">
      <div className="profilePage__btnSet">
        <BackButton />
        <SignOutButton />
      </div>
      <ProfileCard publisher={publisher} />
      <ProfileNav />
      <OwnPublicationsRoute />
    </div>
  );
}

export default ProfilePage;