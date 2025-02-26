import React from 'react';


// components will be here
import ServiceCards from '../components/ServiceCards';
import Portfolio from '../components/Portfolio';

const Home = () => {

  return (
    <section className='w-full'>
            <ServiceCards />
            <Portfolio />
    </section>
  )
}

export default Home
