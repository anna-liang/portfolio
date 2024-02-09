import React from 'react';
import '../styles/Contact.css';
import '../styles/Main.css';

function Contact(props) {
    
    return (
        <div className="contact-container contact">
            <h1 className="subheading">Contact</h1>
            <p className="contact-desc">If you have any questions, feel free to send me a message below or email me at <span className="name">annaliang56@gmail.com</span>.</p>
        </div>
    );
}

export default Contact;