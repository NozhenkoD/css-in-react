import React from 'react';
import ReactDOMServer from 'react-dom/server';
import pretty from 'pretty';
import Highlight from 'react-highlight'

// pretty(ReactDOMServer.renderToStaticMarkup(code))

export const Code = ({ code }) => {
  return (
    <div className="code">
      <Highlight className="jsx" language="jsx">
        {code}
      </Highlight>
    </div>
  );
};
