import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './contactForm.css'

export const ContactForm = () => {
    const form = useRef();
    const [successMessage, setSuccessMessage] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_c48tx4r', 'template_tgmkdn7', form.current, {
                publicKey: '3Xh9QorRpx7ej7JLq',
            })
            .then(
                () => {
                    setSuccessMessage('Message sent successfully!');
                    setErrorMessage(null);
                    form.current.reset();
                },
                (error) => {
                    setErrorMessage('Failed to send message. Please try again.');
                    setSuccessMessage(null);
                    console.error('FAILED...', error.text);
                },
            );
    };

    return (
        <div id='contact' className="contact-form-container">
            <p className="contact-description">Send me a message</p>
            <form ref={form} onSubmit={sendEmail} className="contact-form">
                <label className="contact-label">Name</label>
                <input type="text" name="from_name" className="contact-input" required />
                <label className="contact-label">Email</label>
                <input type="email" name="user_email" className="contact-input" required />
                <label className="contact-label">Message</label>
                <textarea name="message" className="contact-input contact-textarea" required />
                <input type="submit" value="Send" className="contact-submit-btn" />
                {successMessage && <p className="contact-success-message">{successMessage}</p>}
                {errorMessage && <p className="contact-error-message">{errorMessage}</p>}
            </form>
        </div>
    );
};

export default ContactForm;