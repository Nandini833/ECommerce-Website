import React from 'react'
import {  IoCloseOutline } from 'react-icons/io5'
import Button from '../Shared/Button'

const PopUp = ({orderPopUp,handleOrderPopUp}) => {
  return (
    <>
  {
    orderPopUp && (
      <div>
      <div className='h-screen  w-screen fixed top-0 left-0 z-50 backdrop-blur-sm'>
        <div className='fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 shadow-2xl bg-white
         dark:bg-gray-700 duration-200 dark:text-white w-[300px]  rounded-lg'>
          {/* Header Section */}
<div className='flex items-center justify-between'>
<h1> Order Now</h1>
<div>
  <IoCloseOutline onClick={handleOrderPopUp}  className='cursor-pointer text-2xl '/>
  </div> 
</div>
 {/* Form Section */}
 <div className='py-2 mt-4'>
  <input type='text' placeholder='Name' className=' w-full rounded-full border border-gray-500 dark:border-gray-500
   dark:bg-gray-800 px-2 py-1 mb-4  ' />
    <input type='text' placeholder='Email' className=' w-full rounded-full border border-gray-500 dark:border-gray-500
   dark:bg-gray-800 px-2 py-1 mb-4  ' />
    <input type='text' placeholder='Address' className=' w-full rounded-full border border-gray-500 dark:border-gray-500
   dark:bg-gray-800 px-2 py-1 mb-4  ' />
  
 </div>
 <div className='flex justify-center'>
 <Button text={'Order Now'} bgColor={'bg-primary'} className="text-black"  />
     
  </div>
    </div>
      </div>
    </div>
    )
  } </>
  )
 
}

export default PopUp