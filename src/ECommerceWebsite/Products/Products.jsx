import React from 'react'
import Heading from '../Shared/Heading'
import ProductImg1 from '../Images/ProductImg1.png'
import ProductImg2 from '../Images/ProductImg2.png'
import ProductImg3 from '../Images/ProductImg3.png'
import ProductImg4 from '../Images/ProductImg4.png'
import ProductCard from './ProductCard'

const Products = () => {
  const ProductsData=[
    {
      id:1,
      img:ProductImg1,
      title:'Boast HeadPhones',
      price:'120',
      aosDelay:'0'
    },
    {
      id:2,
      img:ProductImg2,
      title:'Rocky Mountain',
      price:'420',
      aosDelay:'200'
    },
    {
      id:3,
      img:ProductImg3,
      title:'Goggles',
      price:'320',
      aosDelay:'400'
    },
    {
      id:4,
      img:ProductImg4,
      title:'Printed',
      price:'220',
      aosDelay:'600'
    }
  ]

  
  const ProductsData2=[
    {
      id:1,
      img:ProductImg1,
      title:'Boast HeadPhones',
      price:'120',
      aosDelay:'0'
    },
    {
      id:2,
      img:ProductImg2,
      title:'Rocky Mountain',
      price:'420',
      aosDelay:'200'
    },
    {
      id:3,
      img:ProductImg3,
      title:'Goggles',
      price:'320',
      aosDelay:'400'
    },
    {
      id:4,
      img:ProductImg4,
      title:'Printed',
      price:'220',
      aosDelay:'600'
    }
  ]
  return (
<div className="container">
  <div className=''>
    {/* Heading Section */}
<Heading title={'Our Products'} subtitle={'Explore Our Products'}/>
{/* Body Section */}
<ProductCard data={ProductsData}/>
<ProductCard data={ProductsData2}/>
  </div>
</div>
  )
}

export default Products