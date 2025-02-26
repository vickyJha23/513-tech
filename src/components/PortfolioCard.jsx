import React, { useEffect } from 'react'
import AOS from 'aos';


const PortfolioCard = ({project}) => {
    useEffect(() => {
        AOS.init()
        AOS.refresh()
    },[])

  return (
    <a href='/' 
    className='block w-[320px] max-w-80 sm:max-w-60 md:max-w-80 lg:max-w-96 transition-all duration-500 ease-in-out hover:shadow hover:scale-[1.05]' 
    data-aos='zoom-in' 
    data-aos-anchor-placement='top-bottom' 
    data-aos-duration='1000'
    >
   <img src={project} alt="" className='rounded' />  
 </a>
  )
}

export default PortfolioCard
