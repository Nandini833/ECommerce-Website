import React from 'react'
import brand1 from '../Images/brand1.png'
import brand2 from '../Images/brand2.png'
import brand3 from '../Images/brand3.png'
import brand4 from '../Images/brand4.png'
import brand5 from '../Images/brand5.png'

const Partners = () => {
  return (
<div className='my-10 bg-slate-100' data-aos='zoom-out'>
<div className="container">
<div className='grid grid-cols-5  gap-10' >
<img src={brand1} alt='' className='w-[70%]  hover:scale-90 duration-700'/>
<img src={brand2} alt='' className=' w-[70%]  hover:scale-90 duration-700'/>
<img src={brand3} alt='' className='w-[70%]   hover:scale-90 duration-700'/>
<img src={brand4} alt='' className=' w-[70%]  hover:scale-90  duration-700'/>
<img src={brand5} alt='' className='w-[70%]  hover:scale-90  duration-700'/>

    </div>
    </div>

</div>
  )
}

export default Partners