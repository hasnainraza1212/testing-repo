import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../Components/Header/Header'
import axios from 'axios';
const Layout = () => {
  useEffect(()=>{
    (async()=>{
    const res=await axios.get("/api/v1")
    console.log(res)
    })()
    console.log("nani")
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