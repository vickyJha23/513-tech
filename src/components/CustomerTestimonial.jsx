import React from 'react'

import Title from './Title'

const CustomerTestimonial = () => {
  return (
    <div className='h-full flex flex-col gap-6 items-center pb-16'>
      <div className='pt-16  flex flex-col items-center gap-6'>
          <h2 className='text-center w-[320px] sm:w-full font-bold text-xl text-[#232B55] max-w-80 md:text-2xl lg:text-3xl md:max-w-md lg:max-w-xl'>"Amazing Desings and Quality Work!"</h2>
          <p className='w-full max-w-80 md:max-w-md lg:max-w-lg text-center text-sm font-light mx-auto text-[#3E3F5C]'>
          Working with 513-tech was a great experience. They understood our vision and delivered a stunning, user-friendly website. The process was smooth, with clear communication and attention to detail. We’re thrilled with the final product and highly recommend their services!
          </p>  
      </div>   
     <div className='flex flex-col items-center gap-4'>
            <img src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="()" className='w-20 h-20 aspect-square object-cover rounded-[50%]' />
           <div className='flex flex-col items-center gap-1'>
               <h3 className='text-lg font-bold text-[#454661]'>John Doe</h3>
               <p className='uppercase font-light text-sm text-[#3E3F5C]'>CEO, AME inc.</p>
           </div>
        </div>
    </div>
  )
}

export default CustomerTestimonial
