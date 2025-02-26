import React from 'react'

const CustomerCard = ({customerName, index}) => {
  return (
    <div className={`transition-all  duration-500 ease-in-out max-w-80 w-[320px] border-[2px] border-[#ccc]  min-h-16 sm:max-w-60 md:max-w-80 lg:max-w-96 flex justify-center items-center rounded`}>
          <p className='tracking-wide text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#9197AA]'>{customerName}</p>     
    </div>
  )
}

export default CustomerCard
