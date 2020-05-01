import React from 'react';
import { useSelector } from 'react-redux';

// * Components
import { ProfileCard } from './ProfileCard';

// * Selectors
import { selectPublisher } from 'utils/selectors';

export const Profile = () => {
  const publisher = useSelector(selectPublisher);

  return <ProfileCard publisher={publisher} />
}