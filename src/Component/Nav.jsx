import React from 'react'
import { Link,NavLink } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'

const Nav = () => {
  return (
    <div>
    
    <nav className="navbar navbar-expand-lg bg-body-tertiary fs-4 '">
  <div className="container-fluid ">

       <NavLink to='.'   className={({isActive})=> isActive ? 'hi ':'yes'}>
            <a c lassName="navbar-brand ms-5 active fs-3">#VANLIFE</a>
        </NavLink>
    <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto p-1 mx-5">
            <NavLink to='host' className={({isActive})=> isActive ? 'hi ':'yes'} >
                <li className="nav-item mx-2">
                <a className="nav-link active" aria-current="page">Host</a>
                </li>
            </NavLink>
            <NavLink to='about'  className={({isActive})=> isActive ? 'hi ':'yes'}   >
                <li className="nav-item mx-3">
                <a className="nav-link active" aria-current="page">About</a>
                </li>

            </NavLink>
            <NavLink to='van'   className={({isActive})=> isActive ? 'hi ':'yes'}  >
                <li className="nav-item mx-2">
                <a className="nav-link active" aria-current="page">Van</a>
                </li>

            </NavLink>
      </ul>
    </div>
  </div>
</nav>


    </div>
  )
}

export default Nav