import React, { useState, useEffect } from 'react';

// * Components
import { SliderLayout } from './SliderLayout';

// * Helpers
import { getRequest } from 'utils/helpers';

export const Slider = () => {
  const [index, setIndex] = useState(0);
  const [publications, setPublications] = useState([]);

  useEffect(() => {
    fetchPublications();
  }, []);

  const fetchPublications = async () => {
    const response = await getRequest('/publications');

    console.log("publications", response.data);

    if (response.status == 200) {
      setPublications(() => response.data)
    }
  }

  return publications.length != 0 && <SliderLayout
    slide={publications[index]}
    index={index}
    dots={publications}
    jumpTo={setIndex}
  />
};