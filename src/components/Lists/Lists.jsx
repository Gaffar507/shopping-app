import React from 'react'
import Card from '../../components/Card/Card'
import { productData} from './../../assets/productData'
import './lists.scss';

const Lists = ({maxPrice, sort, cardId, category}) => {

  return (
    <div className='lists-container'>
      {productData? productData.map((item)=><Card key={item.id} {...item}/>): <span>Nothing found here!</span>}
    </div>
  )
}

export default Lists
