import React from 'react';
import Highlight from 'react-highlight';

export const Code = ({ code }) => {
  return (
    <div className="code">
      <Highlight className="jsx" language="jsx">
        {code}
      </Highlight>
    </div>
  );
};
