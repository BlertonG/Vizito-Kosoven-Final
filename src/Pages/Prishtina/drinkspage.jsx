import React from "react";
import "./Drinkspage.css";
import img1 from './images/illyrian.jpg';
import img2 from './images/sen5es.jpg';
import img3 from './images/shpia.jpg';
import img4 from './images/sospiro.jpg';
import img5 from './images/citygrill.jpg';
import img6 from './images/pinokio.jpg';
import img7 from './images/hera.jpg';
import img8 from './images/garden.jpg';
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/footer";

function Drinks() {

    const restaurants  = [
        { image: img1, name: 'Illyrian Castle Restaurant', rating: 5.0, location: '123 Main St, Prishtina' },
        { image: img2, name: 'Sen5es Restaurant', rating: 5.0, location: '456 Oak St, Prishtina' },
        { image: img3, name: 'Shpia e Vjeter Restaurant', rating: 5.0, location: '789 Pine St, Prishtina' },
        { image: img4, name: 'Sospiro Restaurant', rating: 5.0, location: '101 Elm St, Prishtina' },
        { image: img5, name: 'City Grill Restaurant', rating: 5.0, location: '234 Maple St, Prishtina' },
        { image: img6, name: 'Pinokio Restaurant', rating: 5.0, location: '567 Birch St, Prishtina' },
        { image: img7, name: 'Hera Restaurant', rating: 5.0, location: '890 Cedar St, Prishtina' },
        { image: img8, name: 'Garden Restaurant', rating: 5.0, location: '111 Walnut St, Prishtina' }
    ];

    const handleViewMap = (location) => {
        window.open(`https://www.google.com/maps/search/?api=1&query=${location}`);
    };

    return (
        <div>
            <Navbar />
            <div className="upper-container">
                <h1>Restaurants</h1>
                <div className="container">
                    {restaurants.slice(0, 4).map((restaurant, index) => (
                        <div className="restaurant-card" key={index}>
                            <img src={restaurant.image} alt={restaurant.name} className="restaurant-image" />
                            <div className="restaurant-info">
                                <p className="restaurant-name">{restaurant.name}</p>
                                <p className="restaurant-rating">Rating: {restaurant.rating}</p>
                                <button className="view-map-btn" onClick={() => handleViewMap(restaurant.location)}>View in map</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="lower-container">
                <div className="container">
                    {restaurants.slice(4).map((restaurant, index) => (
                        <div className="restaurant-card" key={index}>
                            <img src={restaurant.image} alt={restaurant.name} className="restaurant-image" />
                            <div className="restaurant-info">
                                <p className="restaurant-name">{restaurant.name}</p>
                                <p className="restaurant-rating">Rating: {restaurant.rating}</p>
                                <button className="view-map-btn" onClick={() => handleViewMap(restaurant.location)}>View in map</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Drinks;
