import React from 'react';
import emailjs from 'emailjs-com';
import swal from '@sweetalert/with-react';
import '../styles/Contact.css';

function Contact(props) {

    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_v6aue8m', 'template_gwhemja', e.target, 'user_C4DsGkjQMTKdNaBB5FTj4')
          .then((result) => {
                swal("Email successfully sent!", "Hope to speak to you soon!", "success");
                console.log(result.text);
          }, (error) => {
                swal("Sorry!", "There was an error with sending your message!", "error");
                console.log(error.text);
          });
        e.target.reset();
    }
    
    return (
        <div class="contact-container contact">
            <h1>Contact</h1>
            <p className="contact-desc">If you have any questions, feel free to send me a message below or email me at annaliang56@gmail.com.</p>
            <form className="contact-form" onSubmit={sendEmail}>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Name" name="name" required/>
                </div>
                <div className="form-group">
                    <input type="email" className="form-control" placeholder="Email Address" name="email" required/>
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Subject" name="subject"/>
                </div>
                <div className="form-group">
                    <textarea className="form-control" placeholder="Message" name="message"/>
                </div>
                <div className="contact-form-submit">
                    <input type="submit" className="btn btn-outline-light" value="Send Email" />
                </div>
            </form>
        </div>
    );
}

export default Contact;