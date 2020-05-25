import React, { useState, useEffect } from 'react';

// * Components
import { Slider } from './Slider';

// * Utils
import { getRequest } from 'utils/helpers';

export const SliderModule = () => {
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

  return publications.length != 0 && <Slider
    slide={publications[index]}
    index={index}
    dots={publications}
    jumpTo={setIndex}
  />
};