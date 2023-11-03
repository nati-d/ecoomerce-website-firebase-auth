import React from 'react'
import './Dashboard.css'
import {product} from '../../components/data/Data'
import {useSelector} from 'react-redux'
import Header from '../../components/header/Header'
import Footer from '../../components/Footer/Footer'

const Dashboard = () => {
   

    const tot = product.map(movie => movie.availableQty).reduce((a, b) => a + b)
    const subQty = useSelector((state) => state.cart.saled);

    const total = tot - subQty;
  return (
    <div>
      <Header/>
       <div className="dash-box-container">
       <div className="dash-box">
        <p>Product Remaining:</p>
        <h1>{total}</h1>
    </div>
       <div className="dash-box">
        <p>Product Saled:</p>
        <h1>{subQty}</h1>
    </div>
       <div className="dash-box">
        <p>User:</p>
        <h1>0</h1>
    </div>
       </div>
    <Footer/>
        
    </div>
  )
}

export default Dashboard