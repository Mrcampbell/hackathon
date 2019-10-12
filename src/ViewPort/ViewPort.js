import React from 'react';
import './ViewPort.css';
import StageA from '../Stage/Stages/StageA';
import StageB from '../Stage/Stages/StageB';

function ViewPort() {

  // update stage here
  let stage = 'A'
  let currentStage = undefined;

  switch(stage) {
    case 'A': currentStage = StageA; break;
    case 'B': currentStage = StageB; break;
  }

  return (
    <div className="ViewPort">
      {currentStage()}
    </div>
  );
}

export default ViewPort;
