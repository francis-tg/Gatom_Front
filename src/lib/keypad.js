import {getEl, getEls} from "./dom";
import _ from "lodash";
export function keypadFunc(state) {
  let data = "";
  const keys = getEls(".keypad .key");
  keys.forEach((k, i) => {
    k.addEventListener("click", (e) => {
      if (
        _.isNumber(parseInt(e.target.innerText)) &&
        !_.isNaN(parseInt(e.target.innerText))
      ) {
        console.log(_.isNaN(parseInt(e.target.innerText)));

        data += parseInt(e.target.innerText);
        state(data);
      } else if (e.target.id === "backspace") {
        data = String(data).slice(0, String(data).length - 1);
        state(data);
      }
    });
  });
}
