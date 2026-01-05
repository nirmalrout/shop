import React from 'react'
import '../assets/css/footer.css'
const Footer = () => {
  return (
    <footer>
        <div className='footer-top'>
            <div className='logo'>
                <img src='./src/assets/images/logo.png' alt='logo' className='logo'/>
            </div>
            <div className='footer-menu'>
                <h6>Ultras</h6>
                <a href=''>About us</a>
                <a href=''>Conditions</a>
                <a href=''>Our Journals</a>
                <a href=''>Careers</a>
                <a href=''>Affiliate Programme</a>
                <a href=''>Ultras Press</a>
            </div>
            <div className='footer-menu'>
                <h6>Customer Service</h6>
                <a href=''>FAQ</a>
                <a href=''>Contact</a>
                <a href=''>Privacy Policy</a>
                <a href=''>Returns & Refunds</a>
                <a href=''>Cookie Guidelines</a>
                <a href=''>Delivery Information</a>
            </div>
            <div className='footer-menu'>
                <h6>Customer Service</h6>
                <a href=''>FAQ</a>
                <a href=''>Contact</a>
                <a href=''>Privacy Policy</a>
                <a href=''>Returns & Refunds</a>
                <a href=''>Cookie Guidelines</a>
                <a href=''>Delivery Information</a>
            </div>
            <div className='subscribe-section'>
                <h6>Subscribe Us</h6>
                <p>Subscribe to our newsletter to get updates about our grand offers.</p>
                <div className='subscribeInput'>
                    <input type='text' className='' placeholder='Email Address' />
                    <button>Subscribe</button>
                </div>
            </div>
        </div>
        <div className='footer-bottom'>
            <p>© 2026 Siazhub. All rights reserved.</p>
            <p>Designed By Hypernxt</p>
        </div>
    </footer>
  )
}

export default Footer