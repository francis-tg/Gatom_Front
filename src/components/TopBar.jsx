import React from "react";
import {Link} from "react-router-dom";

function TopBar() {
  const [time, setTime] = React.useState({
    hours: "",
    min: "",
    sec: ""
  });

  React.useEffect(() => {
    Timer();
    document.addEventListener("touchmove", (e) => {
      console.log(e);
    });
  }, []);
  function Timer() {
    const date = new Date();
    setTime((prevState) => ({
      ...prevState,
      hours: date.getHours().toString().padStart(2, "0"),
      min: date.getMinutes().toString().padStart(2, "0"),
      sec: date.getSeconds().toString().padStart(2, "0")
    }));
    setTimeout(Timer, 100);
  }
  return (
    <nav className='navbar navbar-expand-sm navbar-dark bg-primary shadow-lg fixed-top'>
      <div className='container'>
        <Link className='navbar-brand' to='/'>
          ADNA
        </Link>
        <h3 className='text-white'>GATOM</h3>
        <h6 className='text-white'>
          {time.hours}:{time.min}:{time.sec}
        </h6>
      </div>
    </nav>
  );
}

export default TopBar;
