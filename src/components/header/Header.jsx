import React,{useState} from 'react'
import {nav} from '../data/Data'
import {Link ,useNavigate} from 'react-router-dom'
import './header.css'
import { useSelector } from 'react-redux'
import { useUserContext } from '../../context/UserAuthContext'

const Header = () => {
    const [navList,setNavList] = useState(false);
    const [isAdmin,setIsAdmin] = useState(false);
    const totalQuantity = useSelector((state) => state.cart.totalQuantity);
    const navigate=useNavigate();
    const {user, signout} = useUserContext();
    let c = 'UxfSjuhbLcePlhsLv5NCuzfnBVH2';
    const openCart = () =>{
        navigate('/cart');
    }
    const logout = async () => {
       await signout();
    }
   
  return (
    <div>
        
        <div className="header">
            <div className="container flex">
                <div className="logo flex">
                    <h3>Yene</h3>
                    <span>Souq</span>
                </div>
                <div className="nav">
                    <ul className={navList ? 'small' : 'flex'}>
                    {nav.map((list,index) => (
                        <li key={index}>
                            <Link to ={list.path}>{list.text}</Link>
                        </li>
                    ))}
                    {user &&
                    <>{user.uid==='UxfSjuhbLcePlhsLv5NCuzfnBVH2' ? <li><Link to ='/dashboard'>Dashboard</Link></li> : <></>}</>
                }
                    </ul>
                </div>
                <div className="button flex ">
                    <div className="flex button cart-btn " onClick={openCart}>
                    <h4>
                        <span>{totalQuantity}</span> Cart
                    </h4>
                    </div>
                    {user ?
                    <>
                    <button className="login logout-btn" onClick={logout} >
                        
                    <i className="fa-solid fa-right-from-bracket"></i> Logout
                    </button>
                    </>:
                    <Link to = '/login'>
                    <button className="login" >
                        
                    <i className="fa-solid fa-left-from-bracket"></i> Signin
                    </button>
                    </Link>
                    }
                    
                    
                 
                    
                </div>
                <div className="toggle">
                    <button onClick={() => setNavList(!navList)}>
                    <i className="fa-solid fa-bars"></i>
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header