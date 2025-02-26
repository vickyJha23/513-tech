import React, {useEffect} from 'react';
import AOS from 'aos';

const Hero = () => {
     useEffect(() => {
           AOS.init({
              once: false,
              mirror: true
           });
           AOS.refresh();
     }, [])
  return (
    <section className='w-full h-screen' style={{ backgroundImage: "url('https://cdn.sigma.software/wp-content/uploads/2023/01/service-webdesign-hero-1440@3x.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center center",
      backgroundRepeat: "no-repeat",
     }}>
      <div className='w-full h-full flex justify-center items-center relative before:absolute before:top-0 before:left-0 before:right-0 before:w-full before:h-full before:bg-[#242a56] before:opacity-80'>
             <div className='container mx-auto flex flex-col gap-6 items-center md:items-start px-8' data-aos='fade-up' data-aos-duration='2000' data-aos-once='false'>
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
