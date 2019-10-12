import React from 'react';
import BaseStage from '../BaseStage';

function StageB() {

  const handleSuccess = (e) => {
    console.log('Success!')
  }

  const handleFailure = (e) => {
    console.log('Failure!')
  }

  const layout = <div>
    Stage A
    <button onClick={handleSuccess}>Succeed</button>
    <button onClick={handleFailure}>Fail</button>
  </div>

  return <BaseStage data={{layout}} />
}

export default StageB;