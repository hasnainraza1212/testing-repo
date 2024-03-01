import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import './App.css'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
import Services from './pages/Services/Services'
import Layout from './pages/Layout/Layout'
import Login from './pages/Login/Login'

function App() {
  return (
   <BrowserRouter>
   <Routes>
   <Route path="/" element={<Layout/>}>
    <Route index element={<Home/>}/>
    <Route path="login" element={<Login/>}/>
    <Route path="about" element={<About/>}/>
    <Route path="contact" element={<Contact/>}/>
    <Route path="services" element={<Services/>}/>
    </Route>
   </Routes>
   </BrowserRouter>
  )
}

export default App
