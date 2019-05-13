import React from 'react';
import ReactDOMServer from 'react-dom/server';
import pretty from 'pretty';
import Highlight from 'react-highlight'

export const ViewCode = ({ component }) => {
  return (
    <div className="view-code">
      <Highlight className="html" language="html">
        {
          pretty(ReactDOMServer.renderToStaticMarkup(component))
        }
      </Highlight>
    </div>
  );
};
