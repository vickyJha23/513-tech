import React from 'react'


import ServiceCard from '../components/ServiceCard';
import serviceCardData from '../assets/static';
import Title from '../components/Title';

const ServiceCards = () => {
  return (
    <section className='bg-[#EFF2FF]'>
      <div className='container mx-auto flex flex-col gap-6'>
        <Title title="How can we help you" description="Our team of professionals will help you to achieve your goals Our team of professionals will help you to achieve your goals" />
        <div className='flex flex-col sm:flex-row sm:flex-wrap gap-6 pb-16 items-center justify-center pt-8'>
          {serviceCardData.map((data, index) => <ServiceCard key={index + 1} icon={data.icon} title={data.title} description={data.description} animationDirection={data.animationDirection} />)}
        </div>
      </div>
    </section>
  )
}

export default ServiceCards
