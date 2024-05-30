import React from "react";

import "./about.css";
import img1 from "./trend.png";
import img2 from "./group.png";
import img3 from "./language.png";
import img4 from "./emergency-call.png";


function AboutPage() {
    return (
        <div id='about' className="main-content">
            <div className="content-page">
                <h1>About Kosovo</h1>
                <div className="stats-container">
                    <div className="stats-item">
                        <img className="icon" src={img1} width="100px" alt="Statistics Icon" />
                        <div className="text-content">
                            <h3>Statistics</h3>
                            <p>Kosovo has an area of approximately 10,887 square kilometers.</p>
                        </div>
                    </div>
                    <div className="stats-item">
                        <img className="icon" src={img2} width="100px" alt="Population Icon" />
                        <div className="text-content">
                            <h3>Population</h3>
                            <p>Approximately 1.8 million people live in Kosovo.</p>
                        </div>
                    </div>
                    <div className="stats-item">
                        <img className="icon" src={img3} width="100px" alt="Density Icon" />
                        <div className="text-content">
                            <h3>Language</h3>
                            <p>The official language is Albanian</p>
                        </div>
                    </div>
                    <div className="stats-item">
                        <img className="icon" src={img4} width="100px" alt="Emergency Icon" />
                        <div className="text-content">
                            <h3>Emergency</h3>
                            <p>The emergency lines in Kosovo are:</p>
                            <p>112 - Emergency Line</p>
                            <p>192 - Police</p>
                            <p>194 - Ambulance</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
}



export default AboutPage;
