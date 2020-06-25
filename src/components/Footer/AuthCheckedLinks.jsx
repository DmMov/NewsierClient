import React from 'react';
import { FiberManualRecord } from '@material-ui/icons';

// * Components
import { Link } from 'components';

export const AuthCheckedLinks = ({ authorized }) => authorized ?
  <Link to="/cabinet" classes={['btn']}>кабінет</Link> :
  <>
    <Link to="/sign-in" classes={['btn']}>вхід</Link>
    <FiberManualRecord className="dotIcon" />
    <Link to="/sign-up" classes={['btn']}>реєстрація</Link>
  </>;