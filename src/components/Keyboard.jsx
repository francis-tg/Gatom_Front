import React from "react";
import {MdBackspace} from "react-icons/md";
import {keypadFunc} from "../lib/keypad";
import PropTypes from "prop-types";
function Keyboard({
  value,
  valideCaption,
  valideBtnColor,
  valideAction,
  valideDisable
}) {
  React.useEffect(() => {
    keypadFunc(value);
  }, []);
  return (
    <div className='keypad-container'>
      <div className='keypad'>
        <button className='key'>1</button>
        <button className='key'>2</button>
        <button className='key'>3</button>
        <button className='key' id='backspace'>
          <MdBackspace />
        </button>
        <button className='key'>4</button>
        <button className='key'>5</button>
        <button className='key'>6</button>
        <button className='key'>0</button>
        <button className='key'>7</button>
        <button className='key'>8</button>
        <button className='key'>9</button>

        <button
          className={"key " + valideBtnColor}
          onClick={valideAction}
          disabled={valideDisable}>
          {valideCaption}
        </button>
      </div>
    </div>
  );
}

Keyboard.prototype = {
  value: PropTypes.func.isRequired,
  valideCaption: PropTypes.node || PropTypes.string
};

export default Keyboard;
