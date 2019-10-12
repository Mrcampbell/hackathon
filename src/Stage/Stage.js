import React from 'react';
import './Stage.css';

function Stage(props) {
  const { data } = props;
  return (
    <div className="Stage">
      {data.layout}
    </div>
  );
}

export default Stage;
