import React from 'react';
import { object, number, array, func } from 'prop-types';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

// * Components
import { Slide } from './Slide';
import { Dots } from './Dots';

// * Sass
import './Slider.scss';

export const Slider = ({ slide, index, dots, jumpTo }) =>
  <div id="slider">
    <TransitionGroup className="slidesWrap">
      <CSSTransition
        key={slide.id}
        in={true}
        appear={true}
        timeout={1000}
        classNames="fade"
      >
        <Slide slide={slide} index={index} />
      </CSSTransition>
    </TransitionGroup>
    <Dots
      dots={dots}
      jumpTo={jumpTo}
      activeIndex={index}
    />
  </div>

Slider.propTypes = {
  slide: object,
  index: number,
  dots: array,
  jumpTo: func
}