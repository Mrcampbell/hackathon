import React from 'react';
import './ViewPort.css';
import Stage from '../Stage/Stage';
import StageA from '../Stage/Stages/StageA';

function ViewPort() {
  const stage = StageA;
  return (
    <div className="ViewPort">
      {stage()}
    </div>
  );
}

export default ViewPort;
