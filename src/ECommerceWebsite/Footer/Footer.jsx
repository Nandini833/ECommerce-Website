import React from 'react'
import { FaLocationArrow } from "react-icons/fa";
import { FaMobileAlt } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
const Footer = () => {
    const ImportantLinks=[
    {
        title:'Home',
        link:'/#'
    },
    {
        title:'About',
        link:'/about'
    },
    {
        title:'Contact',
        link:'/contact'
    },
    {
        title:'Blog',
        link:'/blog'
    }
    ]
  return (
    <div className='dark:bg-gray-900  dark:text-white'>
   <div className="container py-10">
    <div className='grid grid-cols-4'>
        {/* Comapny Details */}
    <div className=''>
          <a href='#' alt='logo' className='text-primary text-xl font-semibold tracking-widest uppercase'>
            Eshop
          </a>
          <p className='text-gray-500 pt-3 lg:pr-24'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.  Marores alias cum</p>
          <p className='text-gray-500 my-4'>Made with 💖 by Devarapu Nandini</p>
          <a href='#' className='rounded-full bg-primary py-2 px-4 mt-4 text-white'> Visit our Youtube Channel</a>
        </div>
        {/* Footer Links */}
        <div className=''>
           <div>
            <h1 className='font-semibold text-xl sm:text-left'>Important Links</h1>
            <ul className='flex flex-col space-y-4 pt-3'>
                {
                    ImportantLinks.map((item)=>(
<li key={item.id}><a href={item.link} className='hover:text-red-700 duration-150 '>{item.title}</a>
    </li>
                    ))
                }
            </ul>
           </div>
              </div>
              {/* Social Media Links */}
              <div className=''>
           <div>
            <h1 className='font-semibold text-xl sm:text-left'>Quick Links</h1>
            <ul className='flex flex-col space-y-4 pt-3'>
                {
                    ImportantLinks.map((item)=>(
<li key={item.id}><a href={item.link} className='hover:text-red-700 duration-150 '>{item.title}</a>
    </li>
                    ))
                }
            </ul>
           </div>
              </div>
{/* Company Address */}
              <div className='space-y-5 flex flex-col items-center'>
                    <div className='flex justify-center  gap-5'>
                    <FaLocationArrow />
                    <p> Noida, Utter Pradesh</p>
                        </div>  
                        <div className='flex  justify-center gap-5'>
                        <FaMobileAlt />
                        <p>+ 91 123456789</p>
                            </div> 
                            <div className='flex gap-7 text-center'>
                            <FaInstagram  className='text-4xl hover:scale-125 hover:text-red-500 duration-500'/>
                            <FaFacebook className='text-4xl hover:scale-125  hover:text-red-500 duration-500' />
                            <FaLinkedin className='text-4xl hover:scale-125  hover:text-red-500 duration-500'/>
                                </div>                                                                     
              </div>
    </div>
</div>
   </div>
  )
}
export default Footer