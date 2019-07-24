import React from 'react';

const ExampleContact = () => (
  <div className="contact">
    <h1 className="contact__title">🙏️ Thanks for Reading</h1>
    <h3 className="contact__sub-title"> Have fun, keep learning, and always keep coding.
      <br/>
      Follow me on <a href="Medium">Medium</a>, <a href="Linkedin">Linkedin</a>, <a href="Linkedin">GitHub</a>.
    </h3>
    <h4 className="contact__title-list">Also read my next article:</h4>
    <ul className="contact__list">
      <li><a target="_blank" href="https://medium.com/@dmitrynozhenko/tracking-errors-in-react-app-with-sentry-d6091a84b64e?source=friends_link&sk=721efcc592c5266e298d924d3cf19f7d">Tracking Errors In React App With Sentry</a></li>
      <li><a target="_blank" href="https://medium.com/@dmitrynozhenko/5-ways-to-animate-a-reactjs-app-in-2019-56eb9af6e3bf?source=friends_link&sk=9f9f187d5ae2d4e29c7c89c8a850c1e4">5 Ways to animate a React app in 2019</a></li>
      <li><a target="_blank" href="">9 Ways To Implement CSS in React JS</a> 👈 <i>Demo by this article</i></li>
    </ul>
  </div>
);

export default ExampleContact;
