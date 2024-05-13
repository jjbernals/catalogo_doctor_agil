import React from "react";
import "../../styles/PricingCard.css";
const PricingCard = ({ title, price, storage, users, sendUp }) => {
    return (
        <div className="PricingCard">
            <header>
                <p className="card-title">{title}</p>
                <h1 className="card-price">{price}</h1>
            </header>
            {/* features here */}
            <div className="card-features">
                <div className="card-storage">{storage}</div>
                <div className="card-users-allowed">{users}</div>
                <div className="card-send-up">{sendUp}</div>
            </div>
            <a href="https://dashboard-suarez-pharma.vercel.app/crear-cuenta" target="_blank" rel="noopener noreferrer" >
                <button className="card-btn">Suscríbete</button>
            </a>
        </div>
    );
};

export default PricingCard;
