import React, { useState } from "react";
import Knob from "../Components/Knob/Knob";
import Typography from "@material-ui/core/Typography";
import "./DialStage.css";

export default function DialStage(props) {
  const { onSucceed, onFail, correctAnswer } = props;
  const [value, setValue] = useState(50);

  const checkAnswer = () => {
    if (correctAnswer === value) {
      onSucceed();
    } else {
      onFail();
    }
  };

  return (
    <>
      <Typography variant="h3">Set the dial to {correctAnswer}</Typography>
      <div className="knob-container">
        <Knob
          numTicks={100}
          degrees={360}
          min={1}
          max={100}
          value={value}
          onChange={setValue}
          onMouseUp={checkAnswer}
          color={true}
        />
      </div>
      <Typography variant="h3">{value}</Typography>
    </>
  );
}
