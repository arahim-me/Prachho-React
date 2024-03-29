import React from 'react';
import { useState } from 'react';
import TourData from '../../Data/TourPacks.json';
import './TourPacks.css';

function TourPacks() {
    const [tours, setTours] = useState(TourData);
    return (
        <section className="tour-packs">
            <div className="top-content">
                <h2 className='title'>We Provided Mainly 2 Packeges</h2>
                <p className="desc">Explore Our Best Packeges</p>
            </div>
            <div className="container row">
                {
                    tours.map(tour => {
                        return (
                            <div key={tour.id} className="pack">
                                <img src={tour.img} alt="" className="tour-img img-fluid" />
                                <div className="tour-info">
                                    <h2 className='tour-name'>{tour.name}</h2>
                                    <ul className="tour-desc">
                                        {
                                            tour.desc.map(li => {
                                                return (
                                                    <li>{li}</li>
                                                )
                                            })
                                        }
                                    </ul>
                                    <button className="btn">Explore</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <hr />
        </section>
    );
}

export default TourPacks;