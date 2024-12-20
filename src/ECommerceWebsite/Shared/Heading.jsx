import React from 'react'

const Heading = ({title,subtitle}) => {
  return (
 <div className='text-center mb-10 max-w-[600px] mx-auto space-y-3'>
    <h1 className='font-bold text-3xl lg:text-4xl'>{title}</h1>
    <p className='text-gray-400 '>{subtitle}</p>
 </div>
  )
}

export default Heading