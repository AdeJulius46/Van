import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
import { NavLink } from 'react-router-dom';

const Hostnav = () => {
  return (
    <ul className="nav">
        <NavLink 
            to='.' 
            end
            className={({isActive})=> isActive ? 'hi ':'yes'} >
            <li className="nav-item text-dark">
                <a className="nav-link mx-2 text-dark" aria-current="page" >Dashboard</a>
            </li>            
        </NavLink>
        <NavLink 
            to='income' 
            className={({isActive})=> isActive ? 'hi ':'yes'} >
            <li className="nav-item">
                <a className="nav-link mx-2 text-dark" >Income</a>
            </li>

        </NavLink>
        <NavLink 
            to='vans' 
            className={({isActive}) => isActive ? 'hi ':'yes'} >

                <li className="nav-item text">
                    <a className="nav-link mx-2 text-dark">Vans</a>
                </li>
        </NavLink>
        <NavLink 
            to='reviews' 
            className={({isActive})=> isActive ? 'hi ':'yes'} >

                <li className="nav-item">
                    <a className="nav-link mx-2 text-dark" href="#">Reviews</a>
                </li>
        </NavLink>
</ul>
    
  )
}

export default Hostnav