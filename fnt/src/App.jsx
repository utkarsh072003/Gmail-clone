import React from 'react'
import Navbar from './component/Navbar'
import Sidebar from './component/Sidebar'
import Inbox from './component/Inbox'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Body from './component/Body'
import Mail from './component/Mail'
import Sendmail from './component/Sendmail'
import Login from './component/Login'
import Signup from './component/Signup'
import  { Toaster } from 'react-hot-toast';
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import store from './redux/store'

const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<Body/>,
    children:[
      {
        path:"/",
        element:<Inbox/>
      },
      {
        path:"/mail/:id",
        element:<Mail/>
      }
    ]
  },
  {
    path:"/login",
    element:<Login/>
  },
  {
    path:"/signup",
    element:<Signup/>
  }
])

function App() {
  
 

  return (
    <div className='bg-[#F6F8FC] h-screen'>
      

      <RouterProvider router={appRouter}/>
        <div className='absolute w-[30%] bottom-0 right-20 z-10'>
          <Sendmail/>
        </div>
      <Toaster/>
    </div>
  )
}

export default App
