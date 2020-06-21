import React from 'react';
import { object, number, array, func } from 'prop-types';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

// * Components
import { Slide } from './Slide';
import { Dots } from './Dots';

// * Sass
import './SliderLayout.scss';

export const SliderLayout = ({ slide, index, dots, jumpTo }) =>
  <div className="sliderLayout">
    <TransitionGroup className="slideWrap">
      <CSSTransition
        key={slide.id}
        in={true}
        appear={true}
        timeout={1000}
        classNames="fade"
      >
        <Slide slide={slide} index={index + 1} />
      </CSSTransition>
    </TransitionGroup>
    <Dots
      dots={dots}
      jumpTo={jumpTo}
      activeIndex={index}
    />
  </div>;

SliderLayout.propTypes = {
  slide: object.isRequired,
  index: number.isRequired,
  dots: array.isRequired,
  jumpTo: func.isRequired
};