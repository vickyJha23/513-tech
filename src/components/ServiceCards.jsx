import React from 'react'


import ServiceCard from '../components/ServiceCard';
import serviceCardData from '../assets/static';


const ServiceCards = () => {
  return (
     <section className='bg-[#EFF2FF] flex flex-col gap-6'>
         <div className='pt-18 flex flex-col items-center gap-3 px-8'>
                    <h1 className='text-center text-[#232B55] text-2xl font-bold md:text-5xl'>How can we help you ?</h1>
                      <p className='max-w-80 text-center text-[#393A56] text-sm font-light md:text-lg md:w-full md:max-w-96 md:tracking-widest'>Our team of professionals will help you to achieve your goals</p>
        </div>
        <div className='flex flex-col sm:flex-row sm:flex-wrap gap-6 pb-16 items-center justify-center'>
        {serviceCardData.map((data, index) => <ServiceCard key={index+1} icon={data.icon} title={data.title} description={data.description} animationDirection={data.animationDirection} />)}
        </div>
     </section>
  )
}

export default ServiceCards
