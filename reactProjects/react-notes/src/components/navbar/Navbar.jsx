import React, { useState } from 'react'
import "./navbar.css"
import { Link } from "react-router-dom";


export default function Navbar({ userData, handleSeachStr }) {
  const [user, setUser] = useState(userData)
  const [str, setStr] = useState('')
  const handleLogout = (e) => {
    e.preventDefault()
    setUser(null)
    localStorage.removeItem("user")
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">

          <Link className="navbar-brand" to="/">
            REACT-NOTE
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarScroll">
            <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" >
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  HOME
                </Link>
              </li>
              {user ? (<li className="nav-item" onClick={(e) => handleLogout(e)}>
                <Link className="nav-link" to="/login">
                  LOGOUT
                </Link>
              </li>) : (<li className="nav-item" onClick={(e) => handleLogout(e)}>
                <Link className="nav-link" to="/login">
                  LOGIN
                </Link>
              </li>)}

              {/* <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Link
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li> */}
              {/* <li className="nav-item">
                <a className="nav-link disabled">Link</a>
              </li> */}
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" defaultValue={str} value={str} onChange={(e) => {setStr(e.target.value); handleSeachStr(e.target.value)}}/>
              <button className="btn btn-outline-success" type="submit" onClick={(e) => {
                e.preventDefault();
                console.log("str value" , str);
                handleSeachStr(str)
              }}>Search</button>
            </form>
          </div>
        </div>
      </nav></>


  )
}

