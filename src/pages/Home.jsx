import React from 'react';


// components will be here
import ServiceCards from '../components/ServiceCards';
import Portfolio from '../components/Portfolio';
import TeamMembers from '../components/TeamMembers';

const Home = () => {

  return (
    <section className='w-full'>
            <ServiceCards />
            <Portfolio />
            <TeamMembers />
    </section>
  )
}

export default Home
