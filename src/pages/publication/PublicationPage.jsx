import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

// * Components
import {
  DetailedPublicationModule,
  CommentsSectionModule
} from 'components';

// * Helpers
import { getRequest } from 'utils/helpers';

// * Sass
import './PublicationPage.scss';

export const PublicationPage = () => {
  const { id } = useParams();
  

  return (
    <div className="publicationPage page">
      <DetailedPublicationModule publicationId={id} />
      <CommentsSectionModule publicationId={id} />
      {/* <h3 className="publicationPage__subTitle">коментарі</h3>
      <CommentAddingModule cancel={() => setCommentToReply(null)} commentToReply={commentToReply} publicationId={id} refreshComments={fetchComments} />
      <CommentsBox reply={reply} comments={!!comments && comments} /> */}
    </div>
  );
}