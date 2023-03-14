import React from "react";

export default function checkTouchEnd() {
  const [countDown, setCountDown] = React.useState(10000);
  React.useEffect(() => {
    const dwn = setInterval(() => {
      setCountDown((countDown -= 100));
    }, 1000);
    document.addEventListener("touchstart");
    document.addEventListener("touchmove");
    document.addEventListener("touchend");
    document.addEventListener("touchcancel");
  }, []);
  return {};
}
