import React from 'react'
import CartTable from '../../components/CartTable/CartTable'
import './cart.css'
import {cartActions} from '../../redux/slices/cartSlice'
import { useSelector,useDispatch } from 'react-redux'
import Header from '../../components/header/Header'
import Footer from '../../components/Footer/Footer'
import { useNavigate } from 'react-router-dom'
const Cart = ({authUser}) => {
  const cartItems = useSelector((state) => state.cart.cartItems)
  const dispatch = useDispatch();
  const totalQuantities = useSelector((state) => state.cart.totalQuantity)
  const subTotal = useSelector((state) => state.cart.grandTotal);
  const tax = (subTotal * 0.15)
  const grandTotal = subTotal + tax;
    const navigate=useNavigate()

  const goCheck = () =>{
    navigate('/checkout')
    dispatch(cartActions.afterCheck());
  }
  return (
    <>
    <Header/>
   
    <div className='container'>
    <h3 className='cart-header'>Your Cart( {totalQuantities} items) </h3>
    <table>
        <thead>
                    <tr>
                <td>Item</td>
                <td>Name</td>
                <td>Price</td>
                <td>Quantity</td>
                <td>Total</td>
                <td>Action</td>
                </tr>
                </thead>
    </table>
    {cartItems.length === 0 ? (<h1>No item Added</h1>) : 
    
    cartItems.map((list) => (
      
        <CartTable list={list}  />
    ))
    
    }
    <div className="cart-box">
                <div className="texts">
                    <h4>Subtotal:</h4>
                    <h4>{subTotal}</h4>
                </div>
                <div className="texts">
                    <h4>Sales Tax:</h4>
                    <h4>{tax}</h4>
                </div>
                <div className="texts">
                    <h4>Grand Total:</h4>
                    <h4>{grandTotal}</h4>
                </div>
                <button className='cart-page-btn' onClick={goCheck}>
                    Checkout
                </button>
            </div>
    
    </div>
    <Footer/>
    </>
  )
}

export default Cart