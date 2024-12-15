import React from 'react'
import { FaCarSide } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import { FaHeadphonesSimple } from "react-icons/fa6";
import { MdOutlinePayment } from "react-icons/md";

const Services = () => {
    const serve=[
        {
            id:1,
            icon:<FaCarSide  className='text-red-700 w-10 h-10'/>,
            title:'Free Shipping',
            para:'Free Shipping on All Orders'
        },
        {
            id:2,
            icon:<FaCheckCircle className='text-red-700 w-10 h-10'/>,
            title:'Free Shipping',
            para:'Free Shipping on All Orders'
        },
        {
            id:3,
            icon:<FaHeadphonesSimple className='text-red-700 w-10 h-10'/>,
            title:'Free Shipping',
            para:'Free Shipping on All Orders'
        },
        {
            id:4,
            icon:<MdOutlinePayment className='text-red-700 w-10 h-10'/>,
            title:'Free Shipping',
            para:'Free Shipping on All Orders'
        }
    ]
  return (
    <div className="container">
<div className='py-10 '>
    <div className='grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-2 sm:text-center '>
{
    serve.map((item)=>{
        return <div className='flex gap-5 items-center justify-center space-y-6'>
<span>{item.icon}
</span>
<span className='space-y-1 '>
<p className='font-bold lg:text-2xl ' >{item.title}</p><p className=' opacity-55' >{item.para}</p>
 
</span>
   
   
    
            </div>
    })
}
    </div>

</div>
    </div>
  )
}

export default Services