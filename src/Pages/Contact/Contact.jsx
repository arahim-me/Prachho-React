import React from 'react';
import './Contact.css'
import ContactForm from '../../Components/ContactForm/ContactForm';
function Contact() {
    return (
        <div className="contact-page">
            <div className='container text-center'>                
                <p>The best way to contact with us.</p>
                <p>You can E-mail us to <a href="mailto:rahim.skilledit@gmail.com">rahim.skilledit@gmail.com</a> or you can also leave a message.</p>
                <h2>Get In Touch</h2>
                <ContactForm></ContactForm>
            </div>
        </div>
    );
}

export default Contact;