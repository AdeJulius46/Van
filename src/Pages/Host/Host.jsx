import React from 'react'
import { Outlet } from 'react-router-dom'
import Hostnav from '../../Component/hostnav'
const Host = () => {
  return (
    <div>
      <Hostnav />
      <Outlet />
    </div>
  )
}

export default Host