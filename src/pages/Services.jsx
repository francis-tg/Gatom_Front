import React from 'react'
import {IoCallOutline, IoCashOutline} from "react-icons/io5"
import { Link } from 'react-router-dom'
function Services() {
  return (
    <div className='container mt-3'>
          <Link to="/montant" className='btn btn-warning w-100 m-3 btn-lg'><IoCallOutline size={35}/> Transfert de crédit </Link>
          <button className='btn btn-danger w-100 m-3 btn-lg'><IoCashOutline size={35}/> Transfère d'argent </button>
    </div>
  )
}

export default Services