import React from 'react';
import { useState } from 'react';
import TourData from '../../Data/TourPacks.json';
import './TourPacks.css';

function TourPacks() {
    const [tours, setTours] = useState(TourData);
    return (
        <section className="tour-packs">
            <h2 className='text-center'>We Provided Mainly 2 Packeges</h2>
            <div className="container">
                {
                    tours.map(tour => {
                        return (
                            <div key={tour.id} className="pack">
                                <img src={tour.img} alt="" className="tour-img img-fluid" />
                                <h2 className='tour-name'>{tour.name}</h2>
                                <ul className="tour-desc">
                                    {
                                        tour.desc.map(li=>{
                                            return(
                                                <li>{li}</li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    );
}

export default TourPacks;