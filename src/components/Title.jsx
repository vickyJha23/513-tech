import React from 'react'

const Title = ({title, description, color="black"}) => {
  return (
    <div className='pt-18 flex flex-col gap-6 items-center'>
             <h1 className='capitalize text-2xl font-bold text-[#232B55] md:text-4xl lg:text-5xl text-center'>{title}</h1>
             <p className='w-[350px] max-w-80 md:max-w-md lg:max-w-lg text-center
              text-sm font-light mx-auto' style={{
                  color: color
              }}>{description}</p>
      </div>
  )
}

export default Title
