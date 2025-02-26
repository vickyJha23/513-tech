import React from 'react'

import Title from './Title'
import { customers } from '../assets/static'
import CustomerCard from './CustomerCard'


const Customers = () => {
  return (
    <div className='px-8 flex flex-col gap-6 items-center'>
         <Title title="Our customers" description="Our customers are at the heart of everything we do. We value their trust and work tirelessly to deliver exceptional results." />
         <div className='w-full flex pt-8 flex-wrap gap-3 justify-center items-center pb-16'>
           {
              customers.map((customer, index) => <CustomerCard key={index + 1} customerName={customer.name} index={index + 1} />)
           }
        </div>  
    </div>
  )
}

export default Customers
