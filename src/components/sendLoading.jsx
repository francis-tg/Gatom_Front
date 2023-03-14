import React from "react";
import {IoCogOutline} from "react-icons/io5";

function SendLoading() {
  return (
    <div className='send-splash-screen'>
      <h1>
        <IoCogOutline size={60} className='gear-anim' /> Transfert en cours ...
      </h1>
    </div>
  );
}

export default SendLoading;
