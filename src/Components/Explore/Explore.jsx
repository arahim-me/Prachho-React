import React, { useState } from 'react';
import img from '../../assets/images/explore/e3.jpg';
import writer from '../../assets/images/explore/person.png';
import packages from '../../Data/Packages.json';
import './Explore.css';
import { useNavigate } from 'react-router-dom';
import trunc from '../../functions/Trunc';
function Explore() {
    const [packs, setPacks] = useState(packages);
    const navigate = useNavigate();
    return (
        <section className="blogs">
            <div className="container">
                <div className="inner my-5 p">
                    <div className="top-content">
                        <h2 className='title'>Explore</h2>
                        <h5 className='desc'>Explore New place, food, culture around the world and many more</h5>
                    </div>
                    <div className="cards row">
                        {
                            packs.map(packs => {
                                const { id, title, desc, rating, price } = packs;
                                return (
                                    <div className="card" key={id}>
                                        <img src={img} className="card-img-top" alt="" />
                                        <div className="card-body">
                                            <h5 className="card-title">{title}</h5>
                                            <div className="rating row">
                                                <div className="row"><span className='rate'>{rating.avg}</span><span className='review'>{rating.total} Rating</span></div>
                                                <div className="price"><span className="text-danger">{price}</span></div>

                                            </div>
                                            <div className="post col">
                                                <p className='writing'>{trunc(desc, 100)}</p>
                                            </div>
                                            <div className="row"><button className="btn" onClick={()=>{navigate(`/package/${id}`)}}>View Package</button></div>
                                        </div>
                                    </div>
                                )
                            })
                        }

                    </div>
                </div>
            </div>
        </section>
    );
}

export default Explore;