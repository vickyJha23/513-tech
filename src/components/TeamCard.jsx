import React from 'react'

import collection from '../assets/assets'

const TeamCard = ({img, name}) => {
  return (
    <div className='w-[320px] max-w-80 flex flex-col items-center gap-4'>
        <img src={img} alt='' className='w-full aspect-square object-cover' />
        <div className='flex flex-col items-center gap-2 mt-4'>
            <h3 className='text-lg font-bold text-[#232B55] capitalize tracking-wide'>{name}</h3>
            <p className='text-sm font-light text-[#232B55]'>-----</p>
        </div>
    </div>
  )
}

export default TeamCard
