import React from 'react';
import { useSelector } from 'react-redux';
import useDocumentTitle from '@rehooks/document-title';

// * Routes
import { OwnPublicationsRoute, ProfileRoute, PublicationAddingRoute } from 'routes';

// * Components
import { BackButton, SignOutButton, CabinetMenu } from 'components';

// * Selectors
import { selectPublisher } from 'utils/selectors';

// * Sass
import './CabinetPage.scss';

const CabinetPage = () => {
  const publisher = useSelector(selectPublisher);
  useDocumentTitle(`Newsier | Cabinet of ${publisher.name} ${publisher.surname}`);

  return <div className="cabinetPage page">
    <div className="cabinetPage__btnSet">
      <BackButton />
      <SignOutButton />
    </div>
    <CabinetMenu />
    <OwnPublicationsRoute />
    <ProfileRoute />
    <PublicationAddingRoute />
  </div>;
}

export default CabinetPage;