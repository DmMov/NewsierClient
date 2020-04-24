import React from 'react';
import { string, number, arrayOf } from 'prop-types';
import { FiberManualRecordRounded, Visibility } from '@material-ui/icons';

// * Components
import {
  Link,
  TagsBox
} from 'components';

// * Constants
import { tag } from 'assets/constants';

// * Sass
import './PublicationDetails.scss';

export const PublicationDetails = ({ id, category, categoryId, title, publisher, publisherId, views, tags }) =>
  <div className="publicationDetails">
    <Link to={`/publications/by-category/${categoryId}`}>
      <span className="publicationDetails__category">{category}</span>
    </Link>
    <Link to={`/publication/${id}`}>
      <h4 className="publicationDetails__title">{title}</h4>
    </Link>
    <div className="publicationDetails__relatedInfo">
      <p className="publisher">
        <span className="publisher__prefix">автор, </span>
        <Link to={`/publications/by-publisher/${publisherId}`}>
          <span className="publisher__name">{publisher}</span>
        </Link>
      </p>
      <FiberManualRecordRounded className="dotIcon" />
      <p className="views">
        <Visibility className="statIcon" />
        <span className="views__count">{views}</span>
      </p>
    </div>
    {!!tags || tags.length != 0 && <TagsBox tags={tags} />}
  </div>

PublicationDetails.propTypes = {
  id: string.isRequired,
  category: string.isRequired,
  categoryId: string.isRequired,
  title: string.isRequired,
  publisher: string.isRequired,
  publisherId: string.isRequired,
  views: number.isRequired,
  tags: arrayOf(tag)
}