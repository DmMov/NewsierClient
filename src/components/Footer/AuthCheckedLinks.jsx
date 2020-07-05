import React from 'react';
import { FiberManualRecord } from '@material-ui/icons';

// * Components
import { Link } from 'components';

export const AuthCheckedLinks = ({ authorized }) => authorized ?
  <Link to="/cabinet" classes={['btn']}>cabinet</Link> :
  <>
    <Link to="/sign-in" classes={['btn']}>sign in</Link>
    <FiberManualRecord className="dotIcon" />
    <Link to="/sign-up" classes={['btn']}>sign up</Link>
  </>;