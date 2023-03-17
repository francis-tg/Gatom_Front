import React from "react";
import {IoArrowBack} from "react-icons/io5";

function BackBtn({onClick}) {
  return (
    <div className='back-btn' onClick={onClick}>
      <IoArrowBack size={50} />
      Retour
    </div>
  );
}

export default BackBtn;
