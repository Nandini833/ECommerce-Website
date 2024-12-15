import React from 'react'
import Button from '../Shared/Button'

const ProductCard = ({ data }) => {
    return (
        <div>
            {/* Cards Section */}
            <div className='grid lg:grid-cols-4 sm:grid-cols-2 gap-4 md:grid-cols-2 sm:space-y-7 '>
                {
                    data.map((data) => (
                        <div key={data.id} className='group'>

                            <div data-aos='fade-up' data-aos-delay={data.aosDelay}
                             className='relative space-y-3'>
                                <img src={data.img} alt='' className='lg:w-[250px] lg:h-[250px] sm:h-[150px] sm:w-[250px] object cover
             rounded-md hover:scale-105' />
                          
{/* hover Button */}
                            <div className=' absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 
                            w-full text-center h-full group-hover:backdrop-blur-sm  duration-200 hidden group-hover:flex group-hover:scale-105
                            items-center justify-center'>
                                <Button text={'Add  to Cart'} bgColor={'bg-primary'} className=''/>
                                  </div>
                                  </div>
                            <div>
                                <h2 className='font-semibold'>{data.title}</h2>
                                <h2 className='font-bold'>${data.price}</h2>
                            </div>
                        </div>


                    ))
                }
            </div>
        </div>
    )
}

export default ProductCard