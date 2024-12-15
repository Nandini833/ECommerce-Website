import React from 'react'
import Button from '../Shared/Button'

const Banner = ({ data }) => {
    return (
        <div className='container min-h-[300px] flex justify-center items-center my-12 py-10 rounded-3xl' style={{backgroundColor:data.bgColor}} >
            <div className='grid  grid-cols-3 gap-6 text-white '>
                {/* First Column */}
                <div className='p-6 sm:p-8 space-y-4'>
                    <p data-aos='zoom-out'  className='text-lg font-semibold'>{data.discount}</p>
                    <h1 data-aos='fade-up'  className='uppercase text-4xl lg:text-7xl font-bold'>{data.title}</h1>
                    <p data-aos='fade-up'  className='text-lg font-semibold'>{data.date}</p>
                </div>

                 {/* Second Column */}
                 <div  className='p-6 sm:p-8 space-y-4' data-aos='zoom-in' data-aos-duration='500' data-aos-once='true'>
                  <img src={data.image} alt='' className='scale-125
                  w-[250px] md:w-[340px] mx-auto drop-shadow-2xl object-cover'/>
                </div>

                 {/* Third Column */}
                 <div className='p-6 sm:p-8 space-y-4'>
                    <p  data-aos='zoom-out'  className='text-lg font-semibold'>{data.title2}</p>
                    <h1 data-aos='fade-up'  className='uppercase text-4xl lg:text-7xl font-bold'>{data.title3}</h1>
                    <p data-aos='fade-up'  className='text-lg font-semibold'>{data.title4}</p>
                    <div className='flex justify-center items-center py-6'>
                       <button  className='border rounded-full text-md bg-white hover:scale-105
                        text-red-900 p-4 text-center font-semibold'>Shop Now</button>
                          </div>
                </div>
               
            </div>
        </div>
    )
}

export default Banner