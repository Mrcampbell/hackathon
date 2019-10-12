import React from "react";
import BaseStage from "../BaseStage";
import Fab from '@material-ui/core/Fab';

function PushButton(props) {

  let countIdx = 0;

  const handleClick = () => {
    countIdx++;
    console.log(countIdx)
    if (countIdx > target) {
      onFail();
    }

    if (countIdx === target) {
      setTimeout(() => {
        onSucceed();
      }, 1000);
    }
  }

  const { onSucceed, onFail, target, instructions } = props;

  const layout = (
    <div>
      <div style={{height: '200px', width: '250px', backgroundColor: 'grey', borderStyle: 'outset', borderWidth: '20px'}}>
      <div style={{marginTop: '30px'}}>
        {instructions}
      </div>
       <Fab color="secondary" size="large" aria-label="add" onClick={handleClick} style={{marginTop: '30px'}}>
          <span></span>
        </Fab>
      </div>
    </div>
  );

  return <BaseStage data={{ layout }} />;
}

export default PushButton;
