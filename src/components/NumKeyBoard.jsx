import React from "react";
import {NumpadFunc} from "../lib/keypad";
import PropTypes from "prop-types";
function NumKeyBoard({keyState, valideCaption, setDisable, continueAction}) {
  React.useEffect(() => {
    NumpadFunc(keyState);
  }, []);
  return (
    <div className='numpad-container'>
      <div className='numpad'>
        <button className='num'>1</button>
        <button className='num'>2</button>
        <button className='num'>3</button>
        <button className='num'>4</button>
        <button className='num'>5</button>
        <button className='num'>6</button>
        <button className='num'>7</button>
        <button className='num'>8</button>
        <button className='num'>9</button>
        <button className='num' id='backspace'>
          Effacer
        </button>
        <button className='num'>0</button>
        <button className='num' disabled={setDisable} onClick={continueAction}>
          {valideCaption}
        </button>
      </div>
    </div>
  );
}
NumKeyBoard.rototype = {
  value: PropTypes.func.isRequired,
  valideCaption: PropTypes.node || PropTypes.string,
  setDisable: PropTypes.bool
};

export default NumKeyBoard;
