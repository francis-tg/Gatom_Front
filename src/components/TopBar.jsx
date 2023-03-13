import React from 'react'
import { Link } from 'react-router-dom'

function TopBar() {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-primary shadow-lg fixed-top">
          <div className="container">
            <Link className="navbar-brand" to="/">ADNA</Link>
              <h3 className='text-white'>GATOM</h3>
              <h6 className='text-white'>12:06</h6>
      </div>
    </nav>
    
  )
}

export default TopBar