import React from 'react'
import Card from '../Card/Card'
import { productData } from '../../assets/productData'
import './featuredProducts.scss'

const FeaturedProducts = ({type}) => {

  return (
    <div className='fetured-container'>
      <div className="top">
        <h1>{type} Products</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
        </p>
      </div>

      <div className="bottom">
        {productData?.map((item)=> <Card key={item.id} {...item}/>)}
      </div>
    </div>
  )
}

export default FeaturedProducts
