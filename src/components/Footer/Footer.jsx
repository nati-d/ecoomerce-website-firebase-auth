import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <div className="footer ">
        <div className="container">
            <div className="left">
                <div className="logo">
                    <h3>Yene</h3>
                    <span>Souq</span>
                </div>
                <h3>Do you need help?</h3>
            </div>
            <div className="right">
                <div className="right1">
                <h4>Links</h4>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Stock</li>
                </ul>
                </div>
               <div className="right2">
                    <h4>Social Media</h4>
                    <ul>
                        <li>Facebook</li>
                        <li>Twitter</li>
                        <li>Tiktok</li>
                        <li>Instagram</li>
                        <li>LinkedIn</li>
                    </ul>
               </div>
            </div>
        </div>
    </div>
  )
}

export default Footer