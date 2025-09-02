import React from 'react';
import '../styles/Contact.css';
import '../styles/Main.css';

export const Contact = () => {
  return (
    <div className="contact-container contact">
      <h1 className="subheading">Contact</h1>
      <p className="contact-desc">
        If you would like to reach out, feel free to email me at
        <span className="name"> annaliang.contact@gmail.com</span>.
      </p>
    </div>
  );
};
