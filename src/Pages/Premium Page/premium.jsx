import React, { useState } from 'react';
import './premium.css'

function OfertaPremium(props) {
    const [showPaymentForm, setShowPaymentForm] = useState(false);

    const handleBuyClick = () => {
        setShowPaymentForm(true);
    }

    return (
        <div className="premium-container">
            <h2>Premium Offers</h2>
            <div className="premium-offers">
                <div className="premium-offer">
                    <h3>Premium 1</h3>
                    <ul>
                        <li>2 posts per week on Facebook</li>
                        <li>2 posts per week on Instagram</li>
                        <li>1 month post on the main website</li>
                    </ul>
                    <p>Price: $5.99</p>
                    <button className="buy-button" onClick={handleBuyClick}>Buy now</button>
                </div>
                <div className="premium-offer">
                    <h3>Premium 2</h3>
                    <ul>
                        <li>Daily posts on Facebook</li>
                        <li>Daily posts on Instagram</li>
                        <li>3 months post on the main website</li>
                        <li>Support 24/7</li>
                    </ul>
                    <p>Price: $10.00</p>
                    <button className="buy-button" onClick={handleBuyClick}>Buy now</button>
                </div>
            </div>
            {showPaymentForm && (
                <div className="payment-form">
                    {/* Here you can add your payment form */}
                    <p>Please select your payment method:</p>
                    <button onClick={() => props.handlePayment('creditCard')}>Credit Card</button>
                    <button onClick={() => props.handlePayment('paypal')}>PayPal</button>
                </div>
            )}
        </div>
    );
}

export default OfertaPremium;
