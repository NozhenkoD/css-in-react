import React from 'react';
import ExampleStyledComponents from '../components/examples/ExampleStyledComponents';
import ExampleRadium from '../components/examples/ExampleRadium';
import ExampleJSS from '../components/examples/ExampleJSS';
import ExampleEmotion from '../components/examples/ExampleEmotion';
import ExampleAphrodite from '../components/examples/ExampleAphrodite';
import ExampleInline from '../components/examples/ExampleInline';
import ExampleCssModule from '../components/examples/ExampleCssModule';
import ExampleContact from '../components/examples/ExampleContact';
import codes from './code';

const PAGES = {
  INLINE: {
    title: '1. Inline',
    component: <ExampleInline />,
    code: codes.inline
  },
  CSS_MODULE: {
    title: '2. CSS Module',
    component: <ExampleCssModule />,
    code: codes.cssModule
  },
  STYLED_COMPONENTS: {
    title: '3. Styled Components',
    component: <ExampleStyledComponents />,
    code: codes.styledComponents
  },
  RADIUM: {
    title: '4. Radium',
    component: <ExampleRadium />,
    code: codes.radium
  },
  JSS: {
    title: '5. Jss',
    component: <ExampleJSS />,
    code: codes.jss
  },
  EMOTION: {
    title: '6. Emotion JS',
    component: <ExampleEmotion />,
    code: codes.emotion
  },
  APHRODITE: {
    title: '7. Aphrodite',
    component: <ExampleAphrodite />,
    code: codes.aphrodite
  },
  CONTACT: {
    title: '⭐️ Contact',
    component: <ExampleContact />,
    code: codes.contact
  },
};

export default PAGES;
