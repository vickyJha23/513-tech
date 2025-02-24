import React from 'react'

const Hero = () => {
  return (
    <section className='w-full h-screen flex items-end justify-center' style={{
         backgroundImage: "url('https://websitedemos.net/agency-02/wp-content/uploads/sites/30/2020/06/home-hero-bg.jpg')",
         backgroundSize: "cover",
         backgroundPosition: "center",
         backgroundRepeat: "no-repeat",
         backgroundAttachment: "fixed"
    }}>
      <div className='bg-[rgba(73,79,113,0.7)]  w-full h-full flex justify-center items-center'>
             <div className='container mx-auto flex flex-col gap-6 items-center md:items-start px-3'>
                 <h3 className='capitalize font-bold text-white text-lg max-w-80 text-center md:text-left md:max-w-md'>Fastest and most Lightweight wp theme</h3>
                 <h1 className='text-center capitalize max-w-80 font-bold text-3xl text-white md:text-left md:max-w-md md:text-5xl xl:max-w-lg'>
                     Create amazing buisness website
                 </h1>
                 <p className='text-center text-sm max-w-80 text-white md:text-base md:text-left md:max-w-md xl:max-w-lg'>
                 At <strong className='font-bold'>513-Tech</strong>, we craft exceptional websites and apps that elevate your business to new heights. Whether you’re launching a new venture or scaling your existing brand, we deliver cutting-edge digital solutions tailored to your needs
                 </p>
                 <button className='uppercase cursor-pointer bg-[#6878D6] px-6 py-3 text-white mt-10 rounded-md transition-colors duration-200 ease-linear hover:bg-purple-400 text-sm tracking-widest'>
                      Get Started
                 </button>
              </div> 
      </div>
    </section>
  )
}

export default Hero
