import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import Hero from '../Hero/Hero'
import Catogory from '../Catogory/Catogory'
import Catogory2 from '../Catogory/Catogory2'
import Services from '../Services/Services'
import Banner from '../Banner/Banner'
import Products from '../Products/Products'
import image1 from '../Images/image1.png'
import ProductImg4 from '../Images/ProductImg4.png'
import Blog from '../Blog/Blog'
import Partners from '../Partners/Partners'
import Footer from '../Footer/Footer'
import PopUp from '../PopUp/PopUp'
import AOS from 'aos'
import 'aos/dist/aos.css'

const BannerData={
  id:1,
  discount:'30% OFF',
  title:'Fine Smile',
  date:'10 Jan to 28 Jan',
  image:image1,
  title2:'Air Solo Bass',
  title3:'Winter Sale',
  title4:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaqye reiciendis.',
  bgColor:'#f42c37'
};


const BannerData2={
  id:1,
  discount:'30% OFF',
  title:'Happy Hours',
  date:'10 Jan to 28 Jan',
  image:ProductImg4,
  title2:'Air Solo Bass',
  title3:'Winter Sale',
  title4:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaqye reiciendis.',
  bgColor:'#2dcc6f'
};


const ECommerceRoutes = () => {
  const [orderPopUp,setOrderPopUp]=useState(false)
const handleOrderPopUp=()=>{
  setOrderPopUp(!orderPopUp)
}
useEffect(()=>{
  AOS.init({
    duration:800,
    easing:'ease-in-sine',
    delay:100,
    offset:100,

  });
  AOS.refresh();
},[])
  return (
    <div className='bg-white dark:bg-gray-900 dark:text-white'>
 <div><Navbar handleOrderPopUp={handleOrderPopUp}/></div>
 <div><Hero /></div>
 <Catogory />
 <Catogory2 />
 <Services />
 <Banner data={BannerData}/>
 <Products />
 <Banner data={BannerData2} />
 <Blog />
 <Partners />
 <Footer />
 <PopUp orderPopUp={orderPopUp} handleOrderPopUp={handleOrderPopUp}/>
    </div>
   
   
  )
}

export default ECommerceRoutes