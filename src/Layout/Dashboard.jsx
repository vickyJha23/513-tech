import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from '../components/Header';
import Hero from '../components/Hero';
import Footer from '../components/Footer';

const Dashboard = () => {
  return (
      <section>
                <Header />
                <Hero />
            <main>
                <Outlet />    
            </main>
           <Footer /> 
      </section>
  )
}

export default Dashboard
