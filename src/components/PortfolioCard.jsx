import React, { useEffect } from 'react'



const PortfolioCard = ({project}) => {
  return (
    <a href='https://www.umahomoeopathic.com/' 
    className='block w-[320px] aspect-video max-w-80 sm:max-w-60 md:max-w-80 lg:max-w-96 transition-all duration-500 ease-in-out hover:shadow hover:scale-[1.05]' 
    data-aos='zoom-in' 
    data-aos-anchor-placement='top-bottom' 
    data-aos-duration='1000'
    >
   <img src={project} alt="" className='rounded w-full h-full object-cover' />  
 </a>
  )
}

export default PortfolioCard
