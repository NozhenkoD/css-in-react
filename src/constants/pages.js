import React from 'react';
import ExampleStyledComponents from '../components/examples/ExampleStyledComponents';
import ExampleRadium from '../components/examples/ExampleRadium';
import ExampleJSS from '../components/examples/ExampleJSS';
import ExampleEmotion from '../components/examples/ExampleEmotion';
import ExampleAphrodite from '../components/examples/ExampleAphrodite';
import codes from './code';

const PAGES = {
  STYLED_COMPONENTS: {
    title: 'Styled Components',
    component: <ExampleStyledComponents />,
    code: codes.styledComponents
  },
  RADIUM: {
    title: 'Radium',
    component: <ExampleRadium />,
    code: codes.radium
  },
  JSS: {
    title: 'Jss',
    component: <ExampleJSS />,
    code: codes.jss
  },
  EMOTION: {
    title: 'Emotion JS',
    component: <ExampleEmotion />,
    code: codes.emotion
  },
  APHRODITE: {
    title: 'Aphrodite',
    component: <ExampleAphrodite />,
    code: codes.aphrodite
  },
};

export default PAGES;
