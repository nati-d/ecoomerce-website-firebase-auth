import React from 'react'
import './product.css'
import { useDispatch } from 'react-redux'
import {cartActions} from '../../redux/slices/cartSlice'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductCard = ({list,index}) => {
    const dispatch = useDispatch();

    const addToCart = () => {
        dispatch(cartActions.addItem({
            id:list.id,
            name:list.name,
            price:list.price,
            img:list.img
        }))
       toast.success("Product added successfully");
      
    }
  return (
    <div className="">
        
            <div className="box shadow" key={index}>
                <div className="img">
                    <img src={list.img} />
                </div>
                <div className="text">
                <span style={{background: list.type === "Used" ?"bisque" : "lime", color: list.type === "Used"  ? "black": "white"}}>{list.type}</span>
                <h3>{list.price}</h3> 
                <h5>{list.name}</h5>
                </div>
                
                <div className="button flex btns">
                    <button className='btn' onClick={addToCart}>
                        Add to Cart
                    </button>
                    <span>{list.category}</span>
                </div>
            </div>
   
    </div>
  )
}

export default ProductCard