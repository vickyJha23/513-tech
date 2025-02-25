import React from 'react';
import "aos/dist/aos.css";


// components will be here
import ServiceCards from '../components/ServiceCards';
import Portfolio from '../components/Portfolio';

const Home = () => {

  return (
    <section className='w-full flex justify-center items-center'>
        <div className='container mx-auto h-full'>
            <ServiceCards />
            <Portfolio />
        </div>
    </section>
  )
}

export default Home
