import React, { useEffect, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from '../../Components/Header/Header'
import axios from 'axios';
const Layout = () => {
  const [data, setData] = useState([])
  useEffect(()=>{
    (async()=>{
    const res=await axios.get("/api/v1")
      setData(res)
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