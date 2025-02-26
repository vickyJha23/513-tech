import React, { useEffect } from 'react';
import AOS from 'aos';


import "aos/dist/aos.css";

const ServiceCard = ({icon, title, description, animationDirection}) => {
     useEffect(() => {
          AOS.init({
            //   once: true,
          }
          );
     }, [])
  return (
     <div className='flex flex-col gap-6 items-center'>
            <div className='max-w-80 w-[320px] min-h-56 sm:max-w-70 md:max-w-80 md:w-sm lg:max-w-md bg-white shadow-md rounded-md p-6 flex flex-col gap-3 transition-all duration-500 ease-in-out' data-aos={animationDirection} data-aos-duration='1000'>
                <h2>
                    {React.cloneElement(icon(), {size: 36, color: '#6878D6'})}
                </h2>
                 <div className='flex flex-col gap-3'>
                    <h3 className='font-bold text-base capitalize'>
                         {title}
                     </h3>
                     <p className='text-sm font-light'>
                         {description}          
                    </p>
                </div>
         </div>
      </div>
  )
}

export default ServiceCard
