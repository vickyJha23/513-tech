import React from 'react'

const ContactCard = () => {
    return (
        <div className='w-4xl bg-white shadow-lg rounded flex items-center justify-center'>
            <div className='px-6 py-8 w-full flex flex-col items-center justify-center md:flex-row gap-8 md:gap-6'>
                <div className='md:flex-50 lg:flex-70 w-full flex flex-col items-center md:items-start gap-4'>
                      <h1 className='w-[320px] max-w-80 text-xl text-center md:text-[28px] md:w-full md:max-w-full font-bold text-[#6778D6] lg:text-left'>
                             Would you u like to start a project with us?  
                      </h1> 
                     <p className='w-[320px] text-sm max-w-80 md:text-base md:w-full md:max-w-full text-center font-light lg:text-left'>
                     We’re here to bring your ideas to life. Reach out to discuss your vision, and let’s create something amazing together!                       
                     </p>
                </div>
                <div className='md:flex-50 lg:flex-30 flex md:justify-center lg:justify-end items-center gap-4'> 
                    <span className='inline-block text-white bg-[#6778D6] font-bold px-6 py-2 rounded shadow-md transition-colors duration-500 ease-in-out hover:bg-[#4B5ED7] cursor-pointer'>
                         702-0197-056     
                    </span>
                </div>
            </div>
        </div>
    )
}

export default ContactCard
