import React from 'react';

import PortfolioCard from './PortfolioCard';
import { projects } from '../assets/static';


const PortfolioProjects = () => {
  return (
    <div className='flex flex-wrap gap-4 justify-center items-center pt-10'>
        {
          projects.map((project, index) => <PortfolioCard key={index + 1} project={project} />)
        }
    </div>
  )
}

export default PortfolioProjects
