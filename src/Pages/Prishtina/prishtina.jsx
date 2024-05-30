import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import img1 from './88.jpg';
import img2 from './drink.jpg';
import img3 from './nature.jpg';
import './prishtina.css';
import Footer from "../../Components/Footer/footer";

function Prishtina() {
    return (
        <div>
            <Navbar />
            <img className='img1' src={img1} alt='prishtina' />
            <h2>What do you want to visit ?</h2>
            <div className='select'>
                <Link to="/drinkspage" className="image-container">
                    <img className="small-img" src={img2} alt='drink' />
                    <span className="img-text">Drinks/Foods</span>
                </Link>
                <div className="image-container">
                    <img className="small-img" src={img3} alt='nature' />
                    <span className="img-text">Nature</span>
                </div>
            </div>
            <div className="map-container">

                <iframe
                    title="Prishtina Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47382.89106221971!2d21.096103398780415!3d42.66461368104085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13539d14ad38afcf%3A0x9b884e832e9c883e!2sPristina%2C%20Kosovo!5e0!3m2!1sen!2s!4v1622146954810!5m2!1sen!2s"
                    width="600"
                    height="450"
                    style={{ border: 0, width: '100%' }} // Shto stilen width: '100%'
                    allowFullScreen=""
                    loading="lazy"
                ></iframe>
            </div>
            <Footer />
        </div>
    );
}

export default Prishtina;
