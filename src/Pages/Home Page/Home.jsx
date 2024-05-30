import React from "react";

import "./Home.css"
import Navbar from "../../Components/Navbar/Navbar";
import ContactForm from "../../Components/Contact Form/contact-form";
import Footer from "../../Components/Footer/footer";
import AboutPage from "../About Page/about";
import {useNavigate} from "react-router-dom";
import OfertaPremium from "../Premium Page/premium";


function HomePage() {
    const navigate = useNavigate()
    return (
        <>
            <div className="main-top">
            <Navbar/>



            <div className="content">
                <h1 className="text">Vizito Kosoven</h1>
                {window.innerWidth > 768 && (
                    <button className="btn-1" onClick={() => navigate('city')}>Click Here !</button>
                )}
            </div>
        </div>
            <AboutPage/>
            <OfertaPremium/>
            <ContactForm/>
            <Footer/>

            </>
    );
}


export default HomePage;



