import React from 'react'
import Heading from '../Shared/Heading'
import news1 from '../Images/news1.png'
import news2 from '../Images/news2.png'
import news3 from '../Images/news3.png'



const Blog = () => {
    const BlogData=[
        {
            id:1,
            img:news1,
            published:'Jan 20 ,b 2024 by Dilshad',
            title:'How to Choose perfect SmartWatch',
            subtitle:' hgg jfhuir5 hg4fut3 hgetuy hrgfyte wfhui hfgy3r jrhfjr hwegfy hfgyregf hwegfyu hfgyug hrgfy '
        },
        {
            id:2,
            img:news2,
            published:'Jan 20 ,b 2024 by Dilshad',
            title:'How to Choose perfect VR Set',
            subtitle:' hgg jfhuir5 hg4fut3 hgetuy hrgfyte wfhui hfgy3r jrhfjr hwegfy hfgyregf hwegfyu hfgyug hrgfy '
        },
        {
            id:3,
            img:news3,
            published:'Jan 20 ,b 2024 by Dilshad',
            title:'How to Choose perfect Gadget',
            subtitle:' hgg jfhuir5 hg4fut3 hgetuy hrgfyte wfhui hfgy3r jrhfjr hwegfy hfgyregf hwegfyu hfgyug hrgfy '
        },
    ]
  return (
  <div className="container py-10" >
    <div className=''>
        <Heading  title={'Recent News'} subtitle={'Explore Our Products'}/>
{/* Blog Section */}
<div className='grid lg:grid-cols-3 sm-grid-cols-1 md-grid-3 gap-16 gap-y-5 '>
{
    BlogData.map((info)=>(
<div key={info.id} className='overflow-hidden rounded-2xl bg-white dark:bg-gray-900'>
    <img src={info.img} alt='' className=' h-[190px] w-full object-cover rounded-2xl hover:scale-105 duration-500' />
    <p className='py-4 font-semibold'>{info.published}</p>
    <p className='font-bold pb-2'>{info.title}</p>
    <p className='opacity-70 line-clamp-3'>{info.subtitle}</p>
    </div>
    ))
}
</div>
    </div>
  </div>
  )
}

export default Blog