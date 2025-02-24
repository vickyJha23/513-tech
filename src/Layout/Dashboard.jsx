import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from '../components/Header';
import Hero from '../components/Hero';

const Dashboard = () => {
  return (
      <section>
            <Header />
            <Hero /> 
            <main>
                <Outlet />    
            </main>
      </section>
  )
}

export default Dashboard
