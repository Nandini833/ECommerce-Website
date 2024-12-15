import React from 'react'
import Slider from "react-slick";
import Image1 from "../Images/image1.png"
import Image2 from "../Images/Image2.png"
import Image3 from "../Images/Image3.png"
import Button from '../Shared/Button';

const HeroData=[
    {
        id:1,
        img:Image1,
        subtitle:'Beats-Solo',
        title:'WireLess',
        title2:'HeadPhones',
        description:
        "Lorem His Life will forever be Changed Doller sit amet, His Life will forever be Changed Doller sit amet, His Life will forever be Changed Doller sit amet, His Life will forever be Changed Doller sit amet, His Life will forever be Changed Doller sit amet.",
    },
    {
        id:2,
        img:Image2,
        subtitle:'Beats-Solo',
        title:'WireLess',
        title2:'HeadPhoneVirtual',
        description:
        "Lorem His Life will forever be Changed Doller sit amet, His Life will forever be Changed Doller sit amet, His Life will forever be Changed Doller sit amet, His Life will forever be Changed Doller sit amet, His Life will forever be Changed Doller sit amet.",
    },
    {
        id:3,
        img:Image3,
        subtitle:'Beats-Solo',
        title:'Branded',
        title2:'LapTops',
        description:
        "Lorem His Life will forever be Changed Doller sit amet, His Life will forever be Changed Doller sit amet, His Life will forever be Changed Doller sit amet, His Life will forever be Changed Doller sit amet, His Life will forever be Changed Doller sit amet.",
    }
]
const Hero = ({handleOrderPopUp}) => {
    const settings={
      
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
          }
  return (
    <div className='container'>
        <div className='w-full overflow-hidden min-h-[550px]  sm:min-h-[650px]  flex justify-center items-center hero-bg-color
        '>
            {/* Hero Section */}
            <div className='container  sm:pb-0'>

          
            <Slider {...settings}>
   {
    HeroData.map((data)=>(
<div key={data.id} className=' '>
   <div className='  grid grid-cols-1 sm:grid-cols-2'>
<div className='flex flex-col  justify-center  gap-4 sm:pl-3 pt-12 sm:pt-0   sm:text-left order-2 sm:order-1
relative z-10'>
<h1  data-aos='zoom-out' data-aos-duration='500' data-aos-once='true'
className='text-2xl font-bold sm:text-6xl lg:text-2xl '>{data.subtitle}</h1>
<h1 data-aos='zoom-out' data-aos-duration='500' data-aos-once='true'
 className='text-5xl font-bold sm:text-6xl lg:text-7xl '>{data.title}</h1>
<h1 data-aos='zoom-out' data-aos-duration='500' data-aos-once='true'
 className='text-5xl font-bold sm:text-6xl lg:text-[100px] text-white uppercase dark:text-white'>{data.title2}</h1>
<div data-aos='fade-up' data-aos-offset='0' data-aos-duration='500' data-aos-delay='300'>
  
<Button handler={handleOrderPopUp} text='Shop By Category' bgColor='bg-primary' textColor='text-white' handleOrderPopUp={handleOrderPopUp}/>
   
</div>
</div>

<div className='order-1 sm:order-2'>
<div data-aos='zoom-in' data-aos-duration='500' data-aos-once='true' >
<img src={data.img} alt='My Scroll Images' className='lg:w-[300px] h-[300px] sm:h-[450px] sm:w-[250px] sm:scale-105 lg:scale-110 
object-contain
mx-auto drop-shadow-2xl rounded-full relative z-20 '/>
</div>
</div>
   </div>
</div>
    ))
   }
    </Slider>
    </div>
        </div>
    </div>
  )
}

export default Hero