import React from 'react';
import { main_links } from 'assets/constants';
import { Link } from 'components';

// * Sass
import './Navbar.scss';

export const Navbar = () =>
  <nav className="navbar container">
    <ul className="navbar__list">
      { 
        main_links
          .map(
            link => 
              <li key={link.to} className="navbar__list--item">
                <Link {...link} />
              </li> 
          ) 
      }
    </ul>

    {
      /**
        //TODO: The div below should be the auth panel 
      */
    }
    <div></div>
  </nav>
