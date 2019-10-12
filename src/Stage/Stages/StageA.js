import React from "react";
import BaseStage from "../BaseStage";

function StageA(props) {
  const { onSucceed, onFail } = props;

  const layout = (
    <div>
      Stage A<button onClick={onSucceed}>Succeed</button>
      <button onClick={onFail}>Fail</button>
    </div>
  );

  return <BaseStage data={{ layout }} />;
}

export default StageA;
