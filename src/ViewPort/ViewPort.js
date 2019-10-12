import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import "./ViewPort.css";
import StageA from "../Stage/Stages/StageA";
import StageB from "../Stage/Stages/StageB";
import BlueSwitch from "../Stage/Stages/BlueSwitch";
import PushButton from "../Stage/Stages/PushButton";

const TIME_LIMIT_SECONDS = 5;

function ViewPort() {
  const [stage, setStage] = useState("PushCount");

  const timer = setTimeout(() => {
    fail("you took too long!!!")
  }, TIME_LIMIT_SECONDS * 1000);

  const advance = nextStage => {
    setStage(nextStage);
  };

  const win = () => {
    alert("You won!");
  };

  const fail = (message) => {
    alert("You sucked!\n" + message );
  };

  let stageComponent;

  switch (stage) {
    case "A":
      stageComponent = <StageA onSucceed={() => advance("B")} onFail={fail} />;
      break;

    case "B":
      stageComponent = <StageB onSucceed={win} onFail={fail} />;
      break;

    case "BlueSwitch":
      stageComponent = <BlueSwitch instructions="
      turn off the blue switches!
       (sorry, colorblind people)" onSucceed={() => advance("B")} onFail={fail} />;
      break;
    
    case "PushCount":
      stageComponent = <PushButton target={5} instructions="press 5 times" onSucceed={() => advance("B")} onFail={fail} />;
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
