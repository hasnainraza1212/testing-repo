import axios from 'axios'
import React, { useEffect } from 'react'

const Login = () => {
    useEffect(()=>{
        (async()=>{
            const res= await axios.post("http://localhost:3000/api/v1/login")
            console.log(res.data)
            })()
    },[])
  return (
    <div>Login</div>
  )
}

export default Login