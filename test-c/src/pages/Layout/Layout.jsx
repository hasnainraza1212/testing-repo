import React, { useEffect, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from '../../Components/Header/Header'
import axios from 'axios';
const Layout = () => {
  useEffect(()=>{
    (async()=>{
    const res= await axios.get("https://prod-test-hr.cyclic.app/api/v1")
    console.log(res.data)
    })()
  },[])
  return (
    <div className="layout">
      <div className='header'>
        <Header />
      </div>
      <div className='outlet'>
        <Outlet />
      </div>
    </div>
  )
}

export default Layout
