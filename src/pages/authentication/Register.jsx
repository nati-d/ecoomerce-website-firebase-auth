import React ,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './authentication.css'
import { useUserContext } from '../../context/UserAuthContext'
import {toast} from 'react-toastify'
const Register = () => {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const {signup} = useUserContext();
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try{
            await signup(email,password);
            navigate('/login');
            toast.error("Something went wrong")
        }catch(err){
          toast.error(err)
        }
    }
  return (
    <div>
      <div className="form-container">
        <div className="upper-box">
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <input type='email' placeholder='Email Address' value={email} onChange={(e) => setEmail(e.target.value)}/>
                <input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}/>
                <button type='submit' className='auth-btn'>Register</button>

            </form>
        </div>
        <div className="lower-box">
            <p>Already have an account? <Link to = '/login' >Login</Link></p>
        </div>
      </div>
    </div>
  )
}

export default Register
