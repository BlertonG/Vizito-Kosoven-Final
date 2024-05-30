import React from "react";
import './city.css';
import Navbar from "../../Components/Navbar/Navbar";
import img1 from './prishtina.jpg';
import img2 from './podujeva.jpg';
import img3 from './ferizaj.jpg';
import img4 from './gjilan.png';
import img5 from './peja.jpg';
import img6 from './gjakova.jpg';
import img7 from './mitrovica.jpg';
import img8 from './prizren.jpg';
import Footer from "../../Components/Footer/footer";
import {Link} from "react-router-dom";


function Cities () {
    const handleButtonClick = (cityName) => {

        console.log(`Viewing ${cityName}`);
    };


    return (
        <div className="main-content">
            <Navbar />
            <div className="content-city">
                <div className="row">
                    <div className="image-container">
                        <img src={img1} alt="Prishtina" />
                        <div className="overlay">
                            <Link to='/prishtina' className="image-button" onClick={() => handleButtonClick('Prishtina') }>View Prishtina</Link>
                        </div>
                    </div>
                    <div className="image-container">
                        <img src={img2} alt="Podujeva" />
                        <div className="overlay">
                            <button className="image-button" onClick={() => handleButtonClick('Podujeva')}>View Podujeva</button>
                        </div>
                    </div>
                    <div className="image-container">
                        <img src={img3} alt="Ferizaj" />
                        <div className="overlay">
                            <button className="image-button" onClick={() => handleButtonClick('Ferizaj')}>View Ferizaj</button>
                        </div>
                    </div>
                    <div className="image-container">
                        <img src={img4} alt="Gjilan" />
                        <div className="overlay">
                            <button className="image-button" onClick={() => handleButtonClick('Gjilan')}>View Gjilan</button>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="image-container">
                        <img src={img5} alt="Peja" />
                        <div className="overlay">
                            <button className="image-button" onClick={() => handleButtonClick('Peja')}>View Peja</button>
                        </div>
                    </div>
                    <div className="image-container">
                        <img src={img6} alt="Gjakova" />
                        <div className="overlay">
                            <button className="image-button" onClick={() => handleButtonClick('Gjakova')}>View Gjakova</button>
                        </div>
                    </div>
                    <div className="image-container">
                        <img src={img7} alt="Mitrovica" />
                        <div className="overlay">
                            <button className="image-button" onClick={() => handleButtonClick('Mitrovica')}>View Mitrovica</button>
                        </div>
                    </div>
                    <div className="image-container">
                        <img src={img8} alt="Prizren" />
                        <div className="overlay">
                            <button className="image-button" onClick={() => handleButtonClick('Prizren')}>View Prizren</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Cities;
