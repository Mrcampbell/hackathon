import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import "./ViewPort.css";
import StageA from "../Stage/Stages/StageA";
import StageB from "../Stage/Stages/StageB";

function ViewPort() {
  const [stage, setStage] = useState("A");

  const advance = nextStage => {
    setStage(nextStage);
  };

  const win = () => {
    alert("You won!");
  };

  const fail = () => {
    alert("You sucked!");
  };

  let stageComponent;

  switch (stage) {
    case "A":
      stageComponent = <StageA onSucceed={() => advance("B")} onFail={fail} />;
      break;

    case "B":
      stageComponent = <StageB onSucceed={win} onFail={fail} />;
      break;

    default:
      stageComponent = <StageA onSucceed={() => advance("B")} onFail={fail} />;
      break;
  }

  return (
    <>
      <Typography variant="h1">Mission Control!</Typography>
      {stageComponent}
    </>
  );
}

export default ViewPort;
