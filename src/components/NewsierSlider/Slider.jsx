import React, { useState } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { arrayOf, object, any } from 'prop-types';

// * Components
import { Spinner } from 'components';
import { Dots } from './Dots';

// * Sass
import './Slider.scss';

export const Slider = ({ slides, slide: Slide }) => {
  const [index, setIndex] = useState(0);

  return !slides ?
    <Spinner /> :
    slides.length != 0 ?
      <div className="slider">
        <TransitionGroup>
          <CSSTransition key={slides[index].id} in={true} appear={true} timeout={1000} classNames="fade">
            <Slide {...slides[index]} index={index} />
          </CSSTransition>
        </TransitionGroup>
        <Dots dots={slides} jumpTo={setIndex} activeIndex={index} />
      </div> :
      <p className="noSlides">there are no slides.</p>;
}

Slider.propTypes = {
  slides: arrayOf(object),
  slide: any
}