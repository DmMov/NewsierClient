import React from 'react';
import { bool } from 'prop-types';
import { Copyright, FiberManualRecord } from '@material-ui/icons';

// * Components
import { Logo, Link } from 'components';
import { AuthCheckedLinks } from './AuthCheckedLinks';

// * Sass
import './Footer.scss';

export const Footer = ({ authorized }) =>
  <footer className="newsierFooter">
    <Logo color="white" />
    <p className="newsierFooter__sponsor">
      <span className="preText">спонсор, </span>
      <a href="https://ritm.tv/" className="link">ritm.tv</a>
    </p>
    <nav className="newsierFooter__menu">
      <Link to="/" classes={['btn']}>головна</Link>
      <FiberManualRecord className="dotIcon" />
      <AuthCheckedLinks authorized={authorized} />
    </nav>
    <p className="newsierFooter__copyright">
      <Copyright className="icon" /> Copyright
      <span className="digit year">{new Date().getFullYear()}. </span>
      <span className="newsier">newsier</span>.
      <span className="allRights">Всі права захищені.</span>
    </p>
  </footer>;

Footer.propTypes = {
  authorized: bool.isRequired
};