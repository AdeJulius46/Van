import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {useParams,NavLink,Link,Outlet} from 'react-router-dom'
const Vandetail = () => {
  
    const {id} =useParams();


        const [currentVan ,setVan]=useState([null])

        useEffect(()=>{
            fetch(`/api/host/vans/${id}`)
            .then(res=> res.json())
            .then(data => setVan(data.vans))
        },[])

       

        
    if (!currentVan) {
        return <h1>Loading...</h1>
    }

  return (

    <section>
    <Link
        to=".."
        relative='path'
        className="back-button"
    >&larr; <span>Back to all vans</span></Link>

    <div className="host-van-detail-layout-container">
        <div className="host-van-detail">
            <img src={currentVan.imageUrl} />
            <div className="host-van-detail-info-text">
                <i
                    className={`van-type van-type-${currentVan.type}`}
                >
                    {currentVan.type}
                </i>
                <h3>{currentVan.name}</h3>
                <h4>${currentVan.price}/day</h4>
            </div>
        </div>

        <ul className="nav ">
        <NavLink 
            to='.' 
            end
            className={({isActive})=> isActive ? 'hi ':'yes'} >
            <li className="nav-item text-dark">
                <a className="nav-link  text-dark" aria-current="page" >Details</a>
            </li>            
        </NavLink>
        <NavLink 
            to='pricing' 
            className={({isActive})=> isActive ? 'hi ':'yes'} >
            <li className="nav-item">
                <a className="nav-link  text-dark" >Pricing</a>
            </li>

        </NavLink>
        <NavLink 
            to='photos' 
            className={({isActive}) => isActive ? 'hi ':'yes'} >

                <li className="nav-item text">
                    <a className="nav-link  text-dark">Photos</a>
                </li>
        </NavLink>

       
</ul>
    
            <Outlet context={{currentVan}}  />

    </div>
</section>
  )
}

export default Vandetail