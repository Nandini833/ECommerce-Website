import React from 'react';
import { FcSearch } from "react-icons/fc";
import { FaCartShopping } from "react-icons/fa6";
import DarkMood from '../DarkMood';
import { FaCaretDown } from "react-icons/fa6";

const Navbar = ({handleOrderPopUp}) => {
  const MenuLists = [
    {
      id: 1,
      name: 'Home',
      link: '/#'
    },
    {
      id: 2,
      name: 'Shop',
      link: '/#'
    },
    {
      id: 3,
      name: 'About',
      link: '/#'
    },
    {
      id: 4,
      name: 'Blogs',
      link: '/#'
    }
   
  ];

  const DropDownLinks=[
    {
      id: 1,
      name: 'Trending Products',
      link: '/#'
    },
    {
      id: 2,
      name: 'Best Selling',
      link: '/#'
    },
    {
      id: 3,
      name: 'Top Rated',
      link: '/#'
    }
   
  ]

  return (
    <div className='bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-20'>
      <div className='container flex justify-between items-center'>
      <div className=' flex gap-4 items-center'>
        {/* LogoSection and NavLinks Sections in Left */}
        <div>
          <a href='#' alt='logo' className='text-primary text-xl font-semibold tracking-widest uppercase'>
  
            Eshop
          </a>
        </div>
        <div className=' hidden lg:block'>
          <ul className='flex gap-6 justify-center items-center'>
            {MenuLists.map((data, index) => (
              <li key={index}>
                <a href={data.link} className='inline-block px-4 font-semibold text-gray-700
                 hover:text-orange-600 dark:hover:text-white duration-200'>{data.name}</a>
              </li>
            ))}
            {/* DropDown Section */}
            <li className=' relative cursor-pointer group'>
<a href='#' className='flex items-center font-semibold text-gray-700
                 hover:text-orange-600  duration-200 dark:hover:text-white'>Quick Links
                 <span>
                 <FaCaretDown className='group-hover:rotate-180 duration-300 text-xl dark:hover:text-white      hover:text-orange-600'/>
                 </span>
                 </a>
<div className='absolute z-[767] hidden group-hover:block w-[200px] bg-white shadow-2xl rounded-md dark:bg-gray-900
dark"text-white pt-2'>
  <ul className='  space-y-2'>
   {
    DropDownLinks.map((data)=>(
      <li key={data.id}><a className='p-2 font-semibold text-gray-900 rounded-md 
      hover:text-orange-600 dark:hover:text-white duration-200  hover:bg-rose-300 inline-block w-full'>{data.name}</a></li>
    ))
   }
  </ul>
</div>


            </li>
          </ul>
        </div>
        </div>

       

        {/* Navbar right section */}
        <div className='flex justify-between items-center gap-4'>
          {/* Search bar Section */}
<div  className='group  relative  hidden sm:block'>
<input type='text' placeholder='Search' className='  w-0 focus:outline-1 
  group-hover:w-[300px] transition-all duration-300
   rounded-full   px-2 py-1 focus:outline-none group-hover:border group-hover:border-gray-400
  focus:border-1  dark:border-gray-800 dark:bg-gray-900 group-hover:dark:bg-gray-800'/>
<FcSearch className='text-2xl dark:text-gray-400  absolute top-1/3 -translate-y-1
group-hover:text-pretty right-3 text-primary duration-200'/>
</div>
 {/*  Order Button  Section */}
 <div>
<button className='relative p-3'  onClick={handleOrderPopUp}>
<FaCartShopping  className='dark:text-gray-400 text-xl text-gray-600'/>
<div className='w-4 h-4 bg-red-500 text-white rounded-full absolute top-0 right-0 flex items-center
 justify-center text-xs'>4</div>
</button>
</div>
 {/* Dark Mood  Section Section */}
 <div>
<DarkMood />
</div>
</div>
      </div>
    </div>
  );
}

export default Navbar;
