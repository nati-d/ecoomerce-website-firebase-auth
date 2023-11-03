import React, {useState} from 'react'
import '../../App.css'
import './hero.css'
import {product} from '../data/Data'
const Hero = () => {
    const [productData, setProductData] = useState(product)
    const handleSearch = (e) =>{
        const term = e.target.value;
        const result = product.filter((item) => item.name.toLowerCase().includes(term.toLowerCase()))
        setProductData(result);
    }
  return (
    <div className="hero">
        <div className="container">
            <div className="hero-text">
                    <h4>Just Order and Get</h4>
                    <span>Find new and fetured products here</span>
            </div>
            <form action="" className='flex'>
                
                <div className="box">
                    <input type="text" placeholder='Search your Desire...' onChange={handleSearch}/>
                    <button className='btn'>
                    <i class="fa-solid fa-magnifying-glass"></i>
                    </button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Hero