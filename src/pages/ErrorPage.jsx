import React from 'react';
import { useRouteError, Link } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
  return (
    <section className='h-screen bg-gray-300 w-full'>
         <div className='h-full flex justify-center items-center'>
             <div className='w-[420px] aspect-video bg-white shadow rounded-2xl p-5'>
                    <h1 className='text-center capitalize text-6xl font-bold tracking-wider text-transparent bg-clip-text' style={{
                         backgroundImage: 'url("https://media.istockphoto.com/id/479711207/photo/magellanic-cloud.jpg?s=612x612&w=0&k=20&c=g044tx9D-FPhbX6mkXtIqYepvwUzv4KWIPJe3sxDZnU=")',
                         backgroundSize: "cover",
                         backgroundPosition: "center",
                         backgroundRepeat: "no-repeat",
                    }}>
                        oops!
                    </h1>
                    <h3 className='text-center mt-3 uppercase text-base font-semibold'>
                        {error.status} - Page not found
                    </h3>
                    <p className='text-xs text-center max-w-70 mt-3 mx-auto text-gray-400'>
                        The page you are looking for might have been removed had its name changed or is temporarily unavailable
                    </p>
                    <Link to="/" className='uppercase bg-[#0045D5] mx-auto w-[180px] text-center block mt-3 text-white px-3 py-2 rounded-4xl trackingw-wide'>
                         go to homepage 
                    </Link>
              </div>
         </div>
    </section>
  )
}

export default ErrorPage
