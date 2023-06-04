'use client';

import React, { useContext } from 'react'
import Link from 'next/link'
import AuthContext from '../../context/AuthContext'

const NavBar = () => {

    const {isLoggedIn, logout} = useContext(AuthContext)
    console.log(isLoggedIn)

  return (

    <>
        {
            isLoggedIn
            ?
            <nav className="navbar navbar-expand-lg" style={{backgroundColor: "#e3f2fd"}} >
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Fast Pay</a>

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle       navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">All</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Un Paid</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Payed</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" onClick={()=> logout() }>Logout</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        :
        <nav className="navbar navbar-expand-lg" style={{backgroundColor: "#e3f2fd"}} >
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Fast Pay</a>
            </div>
        </nav>
        }
    </>

  )
}

export default NavBar