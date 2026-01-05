import React from 'react'
import '../assets/css/contact.css'
const Contact = () => {
    return (
        <section className='contact'>
            <div className="container-box">
                <div className='left-section'>
                    <h3>Get <span>25% Discount</span> on your first purchase</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictumst amet, metus, sit massa posuere maecenas. At tellus ut nunc amet vel egestas.</p>
                </div>
                <div className='right-section'>
                    <form >
                        <div className='form-group'>
                            <label htmlFor='name'>Name</label>
                            <input type='text' placeholder='Name' id='name' />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='email'>Email</label>
                            <input type='email' placeholder='Email' id='email' />
                        </div>
                        <div className='checkbox-div'>
                            <input type='checkbox'/>
                            <p>Subscribe to the newsletter</p>
                        </div>
                        <button type='submit' className='submit-btn'>Submit</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact