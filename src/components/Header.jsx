import React, { useCallback, useState } from 'react'

import Navbar from './Navbar'
import Sidebar from './Sidebar'

const Header = () => {
 const [isSidebarVisibible, setSidebarVisible] = useState(false);
 const toggleSidebarVisibility = useCallback(() => setSidebarVisible((prevState) => !prevState), [isSidebarVisibible]);

 

  return (
       <header className='fixed top-0 left-0 right-0 z-10'>
            <Navbar toggleSidebarVisibility={toggleSidebarVisibility} />
            <Sidebar isSidebarVisible={isSidebarVisibible} toggleSidebarVisibility={toggleSidebarVisibility} />   
       </header>
  )
}

export default Header
