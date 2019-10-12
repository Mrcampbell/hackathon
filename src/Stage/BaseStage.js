import React from 'react';
import './BaseStage.css';

function BaseStage(props) {
  const { data } = props;
  return (
    <div className="Stage">
      {data.layout}
    </div>
  );
}

export default BaseStage;
