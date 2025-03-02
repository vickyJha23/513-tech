import React from 'react'
import Title from './Title'


import TeamCard from './TeamCard'
import collection from '../assets/assets'
import ContactCard from './ContactCard'

const TeamMembers = () => {
  return (
    <section className='bg-[#F1F3FF] w-full'>
         <div className='container mx-auto'>
             <div className='px-8 flex flex-col items-center gap-6 pb-16'>
                  <Title title="Meet Our Team" description="Behind every great achievement is a great team. Our team of passionate professionals works together to deliver innovative solutions and make a positive impact." color='#393A56' />
                 <div className='flex gap-8 items-center justify-center flex-wrap'>
                    <TeamCard img={collection.bhagat} name="sachin bhagat" />  
                    <TeamCard img={collection.rajesh} name="rajesh jha" /> 
                 </div> 
                 <ContactCard />
             </div>
         </div>   
    </section>
  )
}

export default TeamMembers
