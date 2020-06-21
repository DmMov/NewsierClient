import React, { useState, useEffect } from 'react';

// * Components
import { SliderLayout } from './SliderLayout';
import { Spinner } from 'components';

// * Utils
import { getRequest } from 'utils/helpers';

export const Slider = () => {
  const [index, setIndex] = useState(0);
  const [publications, setPublications] = useState([]);

  useEffect(() => {
    fetchPublications();
  }, []);

  const fetchPublications = async () => {
    const { status, data } = await getRequest('/publications/popular?count=5');

    if (status === 200)
      setPublications(data);
  }

  return publications && publications.length != 0 ? <SliderLayout
    slide={publications[index]}
    index={index}
    dots={publications}
    jumpTo={setIndex}
  /> :
  <Spinner />;
}