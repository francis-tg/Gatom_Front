import React from "react";
import {IoCogOutline} from "react-icons/io5";

function Loading() {
  return (
    /*  <div className='loadingSpinnerContainer'>
      <div className='loadingSpinner'></div>
    </div> */
    <div className='send-splash-screen'>
      <h1>
        <IoCogOutline size={60} className='gear-anim' /> Veuillez patientez ...
      </h1>
    </div>
  );
}

export default Loading;
