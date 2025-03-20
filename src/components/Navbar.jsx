import React from 'react'
import { HiMiniBars3BottomLeft } from "react-icons/hi2";
import { Link } from "react-router-dom";


import Logo from './Logo'

const Navbar = ({toggleSidebarVisibility}) => {
  return (
     <nav className='w-full h-full'>
         <div className='container mx-auto h-full flex justify-between items-center pr-6 lg:px-6 py-4 z-50'>
            <Logo />  
            <button  onClick={toggleSidebarVisibility} className='w-[50px] h-[50px] flex items-center cursor-pointer justify-center bg-[#6878D6] rounded md:hidden'>
                <HiMiniBars3BottomLeft size={36} color='white' />
            </button>
            <ul className='hidden md:flex gap-3 z-50'>
                <li className='inline-block px-4 py-2 text-lg font-medium tracking-widest text-white cursor-pointer transition-colors duration-500 ease-linear hover:bg-[#6878D6] bg-transparent rounded-tl-[30px] rounded-br-[30px] hover:rounded-tl-[30px] hover:rounded-br-[30px]'>
                    <Link to="/">
                          Home
                    </Link>
                 </li>
                <li className='inline-block px-4 py-2 text-lg font-medium tracking-widest text-white cursor-pointer transition-colors duration-500 ease-linear  hover:bg-[#6878D6] bg-transparent rounded-tl-[30px] rounded-br-[30px] hover:rounded-tl-[30px] hover:rounded-br-[30px]'>
                    <Link to="/about">
                         About
                    </Link>    
                </li>
                <li className='inline-block px-4 py-2 text-lg font-medium tracking-widest text-white cursor-pointer transition-colors duration-500 ease-linear hover:bg-[#6878D6] bg-transparent rounded-tl-[30px] rounded-br-[30px] hover:rounded-tl-[30px] hover:rounded-br-[30px]'>
                      <Link to="/services">
                         Services
                      </Link>
                    </li>
                <li className='inline-block px-4 py-2 text-lg font-medium tracking-widest text-white cursor-pointer transition-colors duration-500 ease-linear  hover:bg-[#6878D6] bg-transparent rounded-tl-[30px] rounded-br-[30px] hover:rounded-tl-[30px] hover:rounded-br-[30px]'>
                     <Link to="/portfolio">
                        Portfolio
                     </Link>
                    </li>
                <li className='inline-block px-4 py-2 text-lg font-medium tracking-widest text-white cursor-pointer transition-colors duration-500 ease-linear hover:bg-[#6878D6] bg-transparent rounded-tl-[30px] rounded-br-[30px] hover:rounded-tl-[30px] hover:rounded-br-[30px]'>

                    <Link to="/contact">
                       Contact
                    </Link>
                    </li>
            </ul>
         </div>
     </nav>
  )
}

export default Navbar
