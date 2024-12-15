import React from 'react'
import earphones from '../Images/earphones.png'
import console from '../Images/console.png'
import oculus from '../Images/oculus.png'
import speakers from '../Images/speakers.png'
import watch from '../Images/watch.png'
import laptop from '../Images/laptop.png'
import Button from '../Shared/Button'


const Catogory = () => {
  return (
 <div className='py-8'>
     <div className='container '>
        {/* first col */}
        <div className='grid  lg:grid-cols-4 gap-8'>
            
<div className='h-[320px] relative bg-gradient-to-br from-black/90 to-black/70 text-white rounded-3xl 
 py-10 pl-5 flex  items-end'>
    <div className='mb-4 space-y-4 z-20'>
        <p className=' text-gray-400'>Enjoy</p>
        <p className=' font-semibold text-gray-400 text-2xl'>With</p>
        <p className=' font-semibold  text-5xl opacity-100'>Earphones</p>
        <Button  text='Browse' bgColor={'bg-primary'} textColor={'white'} className= ''/>
    </div>
    
    <div className=''>
        <img src={earphones} alt='' className='absolute bottom-0  right-0 w-[150px] h-[50%]'/>
    </div>
 </div>

 {/* Second col */}
 <div className='h-[320px] relative bg-gradient-to-br from-brandYellow/90 to-brandYellow/70 text-white rounded-3xl 
 py-10 pl-5 flex  items-end'>
    <div className='mb-4  space-y-4'>
        <p className=''>Enjoy</p>
        <p className='font-semibold  text-2xl'>With</p>
        <p className='font-semibold text-5xl  opacity-85'>Gadget</p>
        <Button  text='Browse' bgColor={'bg-primary'} textColor={'white'} className= ''/>
    </div>
    
    <div className=''>
        <img src={watch} alt='' className='absolute bottom-0 w-[50%] h-[50%] right-8 lg:top-[40px] '/>
    </div>
 </div>
 {/* Third Col */}
 <div className=' col-span-2 h-[320px] relative bg-gradient-to-br from-primary/90 to-primary/70 text-white rounded-3xl 
 py-10 pl-5 flex  items-end'>
    <div className='mb-4 z-10 space-y-4'>
        <p className=' '>Enjoy</p>
        <p className=' font-semibold  text-2xl'>With</p>
        <p className=' font-semibold text-5xl  opacity-85'>Laptop</p>
        <Button  text='Browse' bgColor={'bg-primary'} textColor={'white'} className= ''/>
    </div>
    
    <div className=''>
        <img src={laptop} alt='' className='absolute top-1/2   right-5 bottom-0 w-[50%] h-[50%]  lg:top-[40px] '/>
    </div>
 </div>
        </div>
  </div>
 </div>

  )
}

export default Catogory