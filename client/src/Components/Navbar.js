import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import {Link} from 'react-router-dom'
import Logo from '../Images/batman.png'

function Navbar() {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img style={{width:60, height:40} } src={Logo}  />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul style={{marginLeft:1000,} }  className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="/contact">Contact</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="login">Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="/signup">Registration</Link>
              </li>
              
            </ul>
           
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar