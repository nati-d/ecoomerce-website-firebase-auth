import React ,{useState} from 'react'
import { Link ,useNavigate} from 'react-router-dom'
import './authentication.css'
import { useUserContext } from '../../context/UserAuthContext'
import {toast} from 'react-toastify'
const Login = () => {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const {login, googleLogin} = useUserContext();
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try{
            await login(email,password)
            navigate('/')
           
            toast.success("Successfully Logged in")
        }catch(err){
            toast.error("Something went wrong")

        }
    
    }
    const handleGoogle = async (e) => {
        e.preventDefault();
        try{
            await googleLogin();
            navigate('/');
            toast.success("Successfully Logged")
        }catch(err){
            toast.error("Something went Wrong!")
        }
    }
  return (
    <div>
      <div className="form-container">
        <div className="upper-box">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <input type='email' placeholder='Email Address' value={email} onChange={(e) => setEmail(e.target.value)}/>
                <input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}/>
                <button type='submit' className='auth-btn'>Login</button>

            </form>
            <span>OR</span>
            <button className='google-btn' onClick={handleGoogle}>Sign in using Google</button>
            <button className='phone-btn'>Sign in using Phone Number</button>
        </div>
        <div className="lower-box">
            <p>Don't have an account? <Link to = '/register' >Signup</Link></p>
        </div>
      </div>
    </div>
  )
}

export default Login
