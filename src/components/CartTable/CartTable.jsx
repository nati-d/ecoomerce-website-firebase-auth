import React from 'react'
import './cartTable.css'
import {cartActions} from '../../redux/slices/cartSlice'
import { useSelector,useDispatch } from 'react-redux'


const CartTable = ({list,index}) => {
    const dispatch = useDispatch();
    const deleteItem =()=>{
        dispatch(cartActions.deleteItem(list.id))
      }
  return (
    <div className="cartTable">
        <div className="container">
            <table>
                
                <tbody >
                    <tr key={list.id}>
                    <td><img src={list.img}/></td>
                    <td>{list.name}</td>
                    <td>{list.price} Br</td>
                    <td>{list.quantity}</td>
                    <td>{list.total}</td>
                    <td><i className="fa-solid fa-trash" onClick={deleteItem}></i></td>
                    </tr>
                </tbody>
                
            </table>
            
        </div>
    </div>
  )
}

export default CartTable