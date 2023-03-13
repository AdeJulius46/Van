import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from './Nav'
import Footer from './Footer'
import '../App.css'
const Layout = () => {
  return (
    <div  className="site-wrapper" >
        <Nav />
        <main  className='mar' >
        <Outlet />
        </main>
        <Footer />
    </div>
  )
}

export default Layout