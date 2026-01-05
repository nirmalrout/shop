import React from 'react'
import '../assets/css/getTheApp.css'
const GetTheApp = () => {
    return (
        <section className='get-the-app'>
            <div className="container-box">
                <div className='left-section'>
                    <img src='/images/phone.png' alt='phone' className='phone' />
                </div>
                <div className='right-section'>
                    <h5>Shop faster with foodmart App</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis sed ptibus liberolectus nonet psryroin. 
                    Amet sed lorem posuere sit iaculis amet, ac urna. Adipiscing fames semper erat ac in suspendisse iaculis. 
                    Amet blandit tortor praesent ante vitae. A, enim pretiummi senectus magna. Sagittis sed ptibus liberolectus non et psryroin.
                    </p>
                    <div className='app-buttons'>
                        <img src='/images/app-store.jpg' alt='app-store' />
                        <img src='/images/google-play.jpg' alt='google-play' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default GetTheApp