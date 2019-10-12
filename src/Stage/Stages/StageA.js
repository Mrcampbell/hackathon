import React from 'react';
import Stage from "../Stage"

function StageA() {

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

  return <Stage data={{layout}} />
}

export default StageA;