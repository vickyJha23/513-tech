import React from 'react'

import PortfolioProjects from './PortfolioProjects'
import Customers from './Customers';
import Title from './Title';
import CustomerTestimonials from './CustomerTestimonials';


const Portfolio = () => {
  return (
    <section id='projects' className='w-full'>
      <div className='bg-white'>
        <div className='container mx-auto flex flex-col items-center justify-center'>
          <div className='px-8 flex flex-col items-center'>
            <Title title='Portfolio' description="A showcase of innovative web projects—ranging from responsive websites to advanced web applications—built with modern technologies and a focus on clean design and functionality." />
            <PortfolioProjects />
            <button className='bg-[#6878D6] cursor-pointer px-6 py-3 !mt-14 rounded text-white uppercase text-sm tracking-widest transition-all duration-500 ease-in-out hover:bg-purple-400' >
              Explore more
            </button>
          </div>
          <Customers />
        </div>
      </div>
      <CustomerTestimonials />
    </section>
  )
}

export default Portfolio
