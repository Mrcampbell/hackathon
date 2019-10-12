import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import "./ViewPort.css";
import DialStage from "../Stage/Stages/DialStage";
import BlueSwitch from "../Stage/Stages/BlueSwitch";
import PushButton from "../Stage/Stages/PushButton";

function ViewPort() {
  const [stage, setStage] = useState("BlueSwitch");

  const win = () => {
    alert("You won!");
  };

  const fail = () => {
    alert("You died!");
  };

  let stageComponent;

  switch (stage) {
    case "Dial":
      stageComponent = (
        <DialStage
          onSucceed={() => setStage("PushCount")}
          onFail={fail}
          correctAnswer={42}
        />
      );
      break;

    case "PushCount":
      stageComponent = (
        <PushButton
          target={5}
          instructions="press 5 times"
          onSucceed={win}
          onFail={fail}
        />
      );
      break;

    default:
      stageComponent = (
        <BlueSwitch
          instructions="turn off the blue switches! (sorry, colorblind people)"
          onSucceed={() => setStage("Dial")}
          onFail={fail}
        />
      );
      break;
  }

  return (
    <>
      <Typography variant="h2">Mission Control!</Typography>
      {stageComponent}
    </>
  );
}

export default ViewPort;
