import React from 'react';
import { motion } from "framer-motion";
import { FaTimes } from "react-icons/fa";

const Sidebar = ({isSidebarVisible, toggleSidebarVisibility}) => {  

    return (
    <motion.aside initial={{
        x: '100%',
    }} animate={{
        x: isSidebarVisible ? 0 : '100%',
    }} transition={{
         type: "spring",
         stiffness: 120,
         damping: 20,
    }} className='fixed top-0 right-0 z-20 bg-white w-7/12 h-screen'>
        <div className='w-full h-[80px] flex flex-col justify-center items-center'>
            <button className='px-4 py-2 bg-[#ccc] flex items-center justify-between rounded transition-colors duration-500 ease-linear cursor-pointer hover:bg-red-500 group' onClick={toggleSidebarVisibility}>
                <FaTimes size={28} className='transition-colors duration-500 ease-linear group-hover:text-white' /> 
            </button>
        </div>
        <div className='w-full h-full'>
           <ul className='flex flex-col'>
                <li className='border-b-1 border-b-[#ccc] px-4 py-2 tracking-widest 
                transition-colors duration-500 ease-linear hover:text-[#ccc] cursor-pointer'>Home</li>
                <li className='border-b-1 border-b-[#ccc] px-4 py-2 tracking-widest 
                transition-colors duration-500 ease-linear hover:text-[#ccc] cursor-pointer'>About</li>
                <li className='border-b-1 border-b-[#ccc] px-4 py-2 tracking-widest
                duration-500 ease-linear hover:text-[#ccc] cursor-pointer'>Services</li>
                <li className='border-b-1 border-b-[#ccc] px-4 py-2 tracking-widest
                duration-500 ease-linear hover:text-[#ccc] cursor-pointer'>Portfolio</li>
                <li className='border-b-1 border-b-[#ccc] px-4 py-2 tracking-widest
                duration-500 ease-linear hover:text-[#ccc] cursor-pointer'>Contact</li>
            </ul>
        </div>    
    </motion.aside>
  )
}

export default Sidebar
