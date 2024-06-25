import React from "react";
import './Card.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
export default function Card({ imgSrc, status, rating, place, name, price, job }) {
    return (
        <div className="card">
            <img src={imgSrc} alt={name} />
            <button className="status" disabled>{status}</button>
            <div className="rateAndPlace">
                <div>
                    <FontAwesomeIcon icon={faStar} style={{ color: 'red' }} />
                    <span className="place">({rating}).{place}</span>
                </div>
                <p className="name">{name}
                    <br />
                    <span className="price">From ${price}</span>
                    <span className="job"> / {job}</span>
                </p>
            </div>
        </div>
    );
}