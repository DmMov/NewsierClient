import React from 'react';
import { object, number, array, func } from 'prop-types';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

// * Components
import { Slide } from './Slide';
import { Dots } from './Dots';

// * Sass
import './SliderLayout.scss';

export const SliderLayout = ({ slide, index, dots, jumpTo }) =>
  <div id="slider">
      <TransitionGroup className="slide-wrap">
        <CSSTransition
          in={true}
          key={index}
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

SliderLayout.propTypes = {
  slide: object,
  index: number,
  dots: array,
  jumpTo: func
}