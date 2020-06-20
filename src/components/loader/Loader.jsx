import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';

// * Sass
import './Loader.scss';

const { style } = document.body;

export const Loader = () => {
  useEffect(() => {
    style.overflow = 'hidden';
    return () => {
      style.overflow = 'visible';
    }
  }, []);

  return createPortal(
    <div className="loader" />,
    document.body
  );
}