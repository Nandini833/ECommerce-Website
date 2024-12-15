import React from 'react'

import earphones from '../Images/earphones.png'
import console from '../Images/console.png'
import oculus from '../Images/oculus.png'
import speakers from '../Images/speakers.png'
import watch from '../Images/watch.png'
import laptop from '../Images/laptop.png'
import Button from '../Shared/Button'


const Catogory2 = () => {
  return (
    <div className='py-8'>
     <div className='container '>
        {/* first col */}
        <div className='grid  lg:grid-cols-4 gap-8'>
        <div className=' col-span-2 h-[320px] relative bg-gradient-to-br from-gray-800 to-gray/100 text-white rounded-3xl 
 py-10 pl-5 flex  items-end'>
    <div className='mb-4 z-10 space-y-4'>
        <p className=' '>Enjoy</p>
        <p className=' font-semibold  text-2xl'>With</p>
        <p className=' font-semibold text-5xl  opacity-85'>Laptop</p>
        <Button  text='Browse' bgColor={'bg-primary'} textColor={'white'} className= ''/>
    </div>
    
    <div className=''>
        <img src={console} alt='' className='absolute top-1/2   right-5 bottom-0 w-[50%] h-[50%]  lg:top-[40px] '/>
    </div>
 </div>
            


 {/* Second col */}
 <div className='h-[320px] relative bg-gradient-to-br from-brandGreen/90 to-brandGreen/70 text-white rounded-3xl 
 py-10 pl-5 flex  items-start'>
    <div className='mb-4  space-y-4'>
        <p className=''>Enjoy</p>
        <p className='font-semibold  text-2xl'>With</p>
        <p className='font-semibold text-5xl  opacity-85'>Oculus</p>
        <Button  text='Browse' bgColor={'bg-primary'} textColor={'white'} className= ''/>
    </div>
    
    <div className=''>
        <img src={oculus} alt='' className='absolute bottom-0 w-[50%] h-[50%] right-0  '/>
    </div>
 </div>
 {/* Third Col */}
 <div className='h-[320px] relative bg-gradient-to-br from-brandBlue/90 to-brandBlue/70 text-white rounded-3xl 
 py-10 pl-5 flex  items-start'>
    <div className='mb-4 space-y-4 z-20'>
        <p className=' '>Enjoy</p>
        <p className=' font-semibold  text-2xl'>With</p>
        <p className=' font-semibold  text-5xl opacity-100'>Speakers</p>
        <Button  text='Browse' bgColor={'bg-primary'} textColor={'white'} className= ''/>
    </div>
    
    <div className=''>
        <img src={speakers} alt='' className='absolute bottom-0 rotate-180 top-36 right-3 w-[200px] h-[50%]'/>
    </div>
 </div>
        </div>
  </div>
 </div>
  )
}

export default Catogory2