import React from 'react'
import Sidebar from './Sidebar'
import { Outlet, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import store from '../redux/store'
import { useEffect } from 'react'
import Navbar from './Navbar'
const Body = () => {
  
   const {user}= useSelector(store=>store.app)
   const navigate = useNavigate()
    useEffect(()=>{
      if(!user){
        navigate("/login")
      }
    },[])

  return (
    <>
    <Navbar/>
    <div className='flex'>
            <Sidebar/>
            <Outlet/>
     </div>
    </>
    
  )
}

export default Body
