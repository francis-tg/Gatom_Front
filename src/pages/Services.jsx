import React from "react";
import {IoCallOutline, IoCashOutline} from "react-icons/io5";
import {Link} from "react-router-dom";
import TgcomLogo from "../img/Icone-Togocom@2x.png";
function Services() {
  return (
    <div className='container-fluid p-0'>
      <div className='btn-card-container'>
        <img src={TgcomLogo} width={150} height={150}></img>
        <div className='grid-card'>
          <Link to='/montant' className='btn-card w-100 m-3 btn-lg bg-warning'>
            <IoCallOutline size={35} /> Transfert de crédit{" "}
          </Link>
          <Link
            to='/montant'
            className='btn-card w-100 m-3 btn-lg bg-success text-white'>
            <IoCashOutline size={35} /> Dépôt TMONEY{" "}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Services;
