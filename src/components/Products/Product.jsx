import React, {useState} from 'react'
import './product.css'
import ProductCard from './ProductCard'


const Product = ({data}) => {
   
  return (
    <div className="padding  content  mtop">
        <h4 className='product-title'>--Our Products--</h4>
        <div className="container product-container grid3">
            
            {data.map((list,index)=> (
              
            <ProductCard list={list} index={index}/>
            ))}
        </div>
    </div>
    
  )
}

export default Product