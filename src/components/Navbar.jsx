import React from 'react'
import { HiMiniBars3BottomLeft } from "react-icons/hi2";



import Logo from './Logo'

const Navbar = ({toggleSidebarVisibility}) => {
  console.log("Navbar");
  return (
     <nav className='w-full h-full'>
         <div className='container mx-auto h-full flex justify-between items-center px-6 py-3'>
            <Logo />  
            <button  onClick={toggleSidebarVisibility} className='w-[50px] h-[50px] flex items-center cursor-pointer justify-center bg-[#6878D6] rounded md:hidden'>
                <HiMiniBars3BottomLeft size={36} color='white' />
            </button>
            <ul>
                <li className='inline-block px-4 py-2 text-lg font-medium tracking-widest text-white cursor-pointer transition-colors duration-500 ease-linear hover:bg-[#6878D6] bg-transparent rounded-tl-[30px] rounded-br-[30px] hover:rounded-tl-[30px] hover:rounded-br-[30px]'>Home</li>
                <li className='inline-block px-4 py-2 text-lg font-medium tracking-widest text-white cursor-pointer transition-colors duration-500 ease-linear  hover:bg-[#6878D6] bg-transparent rounded-tl-[30px] rounded-br-[30px] hover:rounded-tl-[30px] hover:rounded-br-[30px]'>About</li>
                <li className='inline-block px-4 py-2 text-lg font-medium tracking-widest text-white cursor-pointer transition-colors duration-500 ease-linear hover:bg-[#6878D6] bg-transparent rounded-tl-[30px] rounded-br-[30px] hover:rounded-tl-[30px] hover:rounded-br-[30px]'>Services</li>
                <li className='inline-block px-4 py-2 text-lg font-medium tracking-widest text-white cursor-pointer transition-colors duration-500 ease-linear  hover:bg-[#6878D6] bg-transparent rounded-tl-[30px] rounded-br-[30px] hover:rounded-tl-[30px] hover:rounded-br-[30px]'>Portfolio</li>
                <li className='inline-block px-4 py-2 text-lg font-medium tracking-widest text-white cursor-pointer transition-colors duration-500 ease-linear hover:bg-[#6878D6] bg-transparent rounded-tl-[30px] rounded-br-[30px] hover:rounded-tl-[30px] hover:rounded-br-[30px]'>Contact</li>
            </ul>
         </div>
     </nav>
  )
}

export default Navbar
