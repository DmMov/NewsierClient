import React from 'react';
import { useSelector } from 'react-redux';
import useDocumentTitle from '@rehooks/document-title';

// * Components
import { ProfileCard } from './ProfileCard';

// * Selectors
import { selectPublisher } from 'utils/selectors';