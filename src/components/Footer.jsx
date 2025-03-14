import React, {useRef, useEffect} from 'react';
import { Link } from 'react-router-dom';

import Logo from './Logo';


const Footer = () => {
    const menuScrollRef = useRef(null);
    useEffect(() => {
         if(!menuScrollRef.current) return;
         const menuScrollItems = [...menuScrollRef.current.querySelectorAll("li")];
          const  handleClick = (e) => {
            const toBeScrolledSectionId =  e.currentTarget.textContent.trim().toLowerCase();
            const toBeScrolledSection =  document.getElementById(toBeScrolledSectionId);
            if(toBeScrolledSection){
                   const position = toBeScrolledSection.getBoundingClientRect().top + window.scrollY;
                   window.scrollTo({ top: position,
                    left: 0, behavior: 'smooth' });
                  toBeScrolledSection.scrollIntoView({
                    behavior: 'smooth',
                  })
            }
         }
          menuScrollItems.forEach((menuScrollItem) => {
                menuScrollItem.addEventListener("click", handleClick)
          })

          return () => {
              menuScrollItems.forEach((menuScrollItem) => {
                     menuScrollItem.removeEventListener("click", handleClick) 
              })
          }
    })




  return (
    <section className='w-full bg-[#242B56]'>
      <div className='w-full pt-8'>
        <div className='container mx-auto flex flex-col items-center justify-center h-full'>
          <div className='px-8 py-8 w-full flex flex-col items-center justify-center gap-8'>
            <div className='w-full flex flex-col gap-4 2xl:gap-0 md:flex-row md:flex-wrap pb-8'>
              <div className='flex-1/4 flex flex-col gap-4'>
                <Logo />
                <p className='text-white text-sm font-light w-[320px]'>
                  At 513-Tech, we craft exceptional websites and apps that elevate your business to new heights. Whether you’re launching a new venture or scaling your existing brand, we deliver cutting-edge digital solutions tailored to your needs
                </p>
              </div>
              <div className='flex-1/4 flex flex-col gap-4'>
                <h3 className='text-white font-bold text-xl tracking-wide'>Company</h3>
                <ul className='flex flex-col gap-2 text-white font-light'>
                  <li>
                   <Link to="/"> Home</Link> 
                   </li>
                  <li>
                      <Link to="/about">About</Link>
                  </li>
                  <li>
                      <Link to="/services">
                         Services
                       </Link> 
                  </li>
                  <li>
                       <Link to="/contact">
                           Contact
                       </Link> 
                  </li>
                </ul>
              </div>
              <div className='flex-1/4 flex flex-col gap-4'>
                <h3 className='text-white font-bold text-xl tracking-wide'>Buisness</h3>
                <ul ref={menuScrollRef} className='flex flex-col gap-2 text-white font-light'>
                     <li className='cursor-pointer'>Projects</li>
                     <li className='cursor-pointer'>OurTeam</li>
                     <li className='cursor-pointer'>Facts</li>
                     <li className='cursor-pointer'>Customers</li>
                </ul>
              </div>
              <div className='flex-1/4 flex flex-col gap-4'>
                <h3 className='text-white font-bold text-xl tracking-wide'>Get In Touch</h3>
                <p className='text-white font-light'>
                  Near Iskon temple,
                  <br />
                  Palghar East 401404,
                  <br />
                  Maharashtra, India
                  <br />
                  info@513-Techgmail.com
                </p>
                <p className='text-white text-sm font-light'>
                  +91 702-0197-056 <br />
                  +91 779-8546-927
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='border-t border-[#6778D6] flex justify-center py-4'>
          <p className='w-[320px] max-w-80 text-center text-white font-light md:w-full md:max-w-full'>
            Copyright © 2025 513-Tech | Powered by 513-Tech
          </p>
        </div>
      </div>
    </section>
  )
}

export default Footer
