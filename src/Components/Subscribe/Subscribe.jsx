import React from 'react';
import './Subscribe.css'
function Subscribe() {
    return ( 
        <div className="subscribe-section">
            <div className="container">
            <h5 className='my-3'>DO YOU WANT TO ADD YOUR BUSINESS LISTING WITH US?</h5>
            <h6 className='my-3'>Listrace offer you to list your business with us and we very much able to promote your Business.</h6>
            <input type="email" placeholder='Enter your email here' className='my-3 py-2 form-control' />
            <button className='btn'>Subscribe</button>
            </div>
        </div>
     );
}

export default Subscribe;