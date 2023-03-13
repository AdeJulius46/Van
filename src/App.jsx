import  React, { useState } from 'react'
import './App.css'
import Layout from './Component/Layout'
import Home from './Pages/Home'
import About from './Pages/About.'
import Van from "./Pages/Vans/Van"
import Vandetails from './Pages/Vans/Vandetails'
import Host from './Pages/Host/Host'
import Dashboard from './Pages/Host/Dashboard'
import {Routes,Route} from "react-router-dom"
import Income from './Pages/Host/Income'
import Reviews from './Pages/Host/Reviews'
import Vans from './Pages/Host/Vans'
import Vandetail from './Pages/Host/Vandetail'
import Details from './Pages/Host/Details'
import Pricing from './Pages/Host/Pricing'
import Photos from './Pages/Host/Photos'


function App() {



  return (


    <div>
        
    <Routes >   
          <Route path="/"  element={<Layout />} >
              <Route index element={<Home />}  />
              <Route path='about' element={<About />}  />
              <Route path='van' element={<Van/>}  />
              <Route path='van/:id' element={<Vandetails />} />

              <Route path='host' element={<Host />} > 
                  <Route  index element={<Dashboard />} />
                  <Route  path='income' element={<Income />} />
                  <Route path='reviews' element={<Reviews />} />
                  <Route path='vans' element={<Vans />}/>
                  
                      <Route path='vans/:id' element={<Vandetail />} > 
                        <Route index element={<Details />}  />
                        <Route path='pricing' element={<Pricing />} />
                        <Route path='photos' element={<Photos />} />
                      </Route>
              </Route>
          </Route>
    </Routes>


    </div>
  )
}

export default App
