import React from 'react';
import './Services.css';
function Services() {
    return (
        <div className="services-section">
            <h2>Services We Provide</h2>
            <p>The Best Servide we provided</p>
            <div className="container">
                <div className="service">
                    <i className="fas fa-solid fa-hotel"></i>
                    <h4>Resturant</h4>
                    <p>150 listing</p>
                </div>
                <div className="service">
                    <i className="fas fa-solid fa-city"></i>
                    <h4>Destination</h4>
                    <p>214 listing</p>
                </div>
                <div className="service">
                    <i className=" fas fa-solid fa-suitcase-rolling"></i>
                    <h4>Hotels</h4>
                    <p>185 listing</p>
                </div>
                <div className="service">
                    <i className=" fas fa-solid fa-pills"></i>
                    <h4>Healthcare</h4>
                    <p>200 listing</p>
                </div>
                <div className="service">
                    <i className=" fas fa-solid fa-car-side"></i>
                    <h4>Automation</h4>
                    <p>120 listing</p>
                </div>
            </div>
        </div>
    );
}

export default Services;