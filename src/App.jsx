import React, { useEffect } from 'react'
import { RouterProvider } from 'react-router-dom';
import { Toaster } from 'sonner';
import router from './routes'
import "aos/dist/aos.css";
import Aos from "aos";


const App = () => {
   useEffect(() => {
       Aos.init({
           once: true

       })
       Aos.refresh()
   }, [])



  return (
       <>
          <Toaster richColors />
          <RouterProvider router={router} />
       </>
  )
}

export default App
