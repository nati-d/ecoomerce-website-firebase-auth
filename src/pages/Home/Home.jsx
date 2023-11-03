import React ,{useState} from 'react'
import Product from '../../components/Products/Product'
import {product} from '../../components/data/Data'
import Header from '../../components/header/Header'
import Footer from '../../components/Footer/Footer'
import './home.css'
const Home = () => {
    const [productData, setProductData] = useState(product)
    const handleSearch = (e) =>{
        const term = e.target.value;
        const result = product.filter((item) => item.name.toLowerCase().includes(term.toLowerCase()))
        setProductData(result);
    }
  return (
    <div>
        <Header/>
    <div className="hero">
        <div className="container">
            <div className="hero-text">
                    <h4>Just Order and Get</h4>
                    <span>Find new and fetured products here</span>
            </div>
            <form action="" className='flex'>
                
                <div className="box">
                    <input type="text" placeholder='Search your Desire...' onChange={handleSearch}/>
                    
                </div>
            </form>
        </div>
    </div>
        {productData.length === 0 ? <h1>No Product at all</h1>: <Product data={productData}/>}
       <Footer/>
    </div>
  )
}

export default Home