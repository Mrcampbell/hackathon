import React, { useEffect, useState } from "react";
import BaseStage from "../BaseStage";
import { Switch } from "@material-ui/core";

const switchBoxStyle = { flexGrow: 1, width: '33%', outline: '1px solid black', paddingTop: '15%', paddingBottom: '15%' }

const RED_1 = 'red 1'
const RED_2 = 'red 2'
const RED_3 = 'red 3'
const RED_4 = 'red 4'
const RED_5 = 'red 5'
const BLUE_1 = 'blue 1'
const BLUE_2 = 'blue 2'
const BLUE_3 = 'blue 3'
const GREY_1 = 'grey 1'
const GREY_2 = 'grey 2'
const GREY_3 = 'grey 3'
const GREY_4 = 'grey 4'

function BlueSwitch(props) {
  const { onSucceed, onFail, instructions } = props;

  const instantFail = () => {
    console.log('fail')
    onFail()
  }

  useEffect(() => {
    if (!state[BLUE_1] && !state[BLUE_2] && !state[BLUE_3]) {
      console.log('so much winning')
      onSucceed()
    }
  })

  const blueSwitch = (label) => {
    return (
      <Switch
        checked={state[label]}
        value={label}
        onChange={handleChange(label)}
        color="primary"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      />
    )
  }

  const redSwitch = (label) => {
    return (
      <Switch
        checked={state[label]}
        value={label}
        onChange={handleChange(label)}
        color="secondary"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      />
    )
  }

  const greySwitch = (label) => {
    return (
      <Switch
        checked={state[label]}
        value={label}
        onChange={handleChange(label)}
        color="default"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      />
    )
  }

  const [state, setState] = useState({
    [RED_1]: true,
    [RED_2]: true,
    [RED_3]: true,
    [RED_4]: true,
    [RED_5]: true,
    [BLUE_1]: true,
    [BLUE_2]: true,
    [BLUE_3]: true,
    [GREY_1]: true,
    [GREY_2]: true,
    [GREY_3]: true,
    [GREY_4]: true,
  });

  const handleChange = name => event => {

    if (name.includes('red') || name.includes('grey')) {
      instantFail()
    }

    setState({ ...state, [name]: event.target.checked });
  };

  const layout = (
    <div style={{ width: '300px', height: '500px'}}>
         <div style={{ marginTop: '30px' }}>
          {instructions}
        </div>
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: '30px'
      }}>
    
        <div style={switchBoxStyle}>{redSwitch(RED_1)}</div>
        <div style={switchBoxStyle}>{blueSwitch(BLUE_1)}</div>
        <div style={switchBoxStyle}>{redSwitch(RED_2)}</div>
        <div style={switchBoxStyle}>{greySwitch(GREY_1)}</div>
        <div style={switchBoxStyle}>{redSwitch(RED_3)}</div>
        <div style={switchBoxStyle}>{blueSwitch(BLUE_2)}</div>
        <div style={switchBoxStyle}>{redSwitch(RED_4)}</div>
        <div style={switchBoxStyle}>{redSwitch(RED_5)}</div>
        <div style={switchBoxStyle}>{greySwitch(GREY_2)}</div>
        <div style={switchBoxStyle}>{greySwitch(GREY_3)}</div>
        <div style={switchBoxStyle}>{greySwitch(GREY_4)}</div>
        <div style={switchBoxStyle}>{blueSwitch(BLUE_3)}</div>
      </div>
    </div>
  );

  return <BaseStage data={{ layout }} />;
}

export default BlueSwitch;
