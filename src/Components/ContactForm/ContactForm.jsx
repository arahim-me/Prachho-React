import React from 'react';
import './ContactForm.css'

function ContactForm() {
    return (
        <div className="container">
            <form className="input-form" action="">
                <input id="name" type="text" placeholder="Your Name" />
                <input id="email" type="text" placeholder="Your Email" />
                <textarea name="" id="message" placeholder="Your Message"></textarea>
                <input type="submit" value="Send" className='btn' />
            </form>
        </div>
    );
}

export default ContactForm;