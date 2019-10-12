import React from "react";
import BaseStage from "../BaseStage";

function StageB(props) {
  const { onSucceed, onFail } = props;

  const layout = (
    <div>
      Stage B<button onClick={onSucceed}>Succeed</button>
      <button onClick={onFail}>Fail</button>
    </div>
  );

  return <BaseStage data={{ layout }} />;
}

export default StageB;
