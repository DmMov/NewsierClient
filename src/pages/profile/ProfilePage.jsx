import React from 'react';
import { useSelector } from 'react-redux';

// * Components
import { ProfileCard } from 'components';

// * Selectors
import { selectPublisher } from 'utils/selectors';

// * Sass
import './ProfilePage.scss';

const ProfilePage = () => {
  const publisher = useSelector(selectPublisher);

  return (
    <div className="profilePage page">
      <ProfileCard publisher={publisher} />
    </div>
  );
}

export default ProfilePage;