import React, {useState} from 'react';
import './ViewPort.css';
import StageA from '../Stage/Stages/StageA';
import StageB from '../Stage/Stages/StageB';

function ViewPort() {
  // update stage here
  const [stage, setStage] = useState('A');

  const advance = (nextStage) => {
    setStage(nextStage)
  }

  return (
    <div className="ViewPort">
    {
      stage === 'A' && <StageA onSucceed={() => advance('B')} onFail={() => alert('you suck')} /> ||
      stage === 'B' && <StageB />
    }
    </div>
  )
}

export default ViewPort;
