import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="footer-content">
                    <h3>Contact Us</h3>
                    <p>Email: blertoni2021@gmail.com</p>
                    <p>Phone: +121 56556 565556</p>
                    <p>Address: Rr.Zahir Pajaziti Podujeve</p>
                </div>
                <div className="footer-content">
                    <h3>Quick Links</h3>
                    <ul className="list">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Premium</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
                <div className="footer-content">
                    <h3>Follow Us</h3>
                    <ul className="social-icons">
                        <li><a href="#"><i className="fab fa-facebook"></i></a></li>
                        <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                        <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                        <li><a href="#"><i className="fab fa-linkedin"></i></a></li>
                    </ul>
                </div>
            </div>
            <div className="bottom-bar">
                <p>&copy; 2023 your company. All rights reserved</p>
            </div>
        </footer>
    );
};

export default Footer;
