import React from 'react';
import BlogImg from '../../assets/images/explore/e3.jpg';
import writer from '../../assets/images/explore/person.png';
import './Explore.css';
function Explore() {
    return (
        <div className="blogs">
            <div className="container">
                <div className="inner my-5 p">
                    <div className="title text-center my-3">
                        <h2>Explore</h2>
                        <h5>Explore New place, food, culture around the world and many more</h5>
                    </div>
                    <div className="cards">
                        <div className="card m-3">
                            <img src={BlogImg} className="card-img-top" alt="" />
                            <div className="card-body">
                                <h5 className="card-title">Europe Tour</h5>
                                <div className="rating row justify-content-between align-items-center px-3">
                                    <div className="rate"><span className='btn btn-secondary mr-4'>5.0</span><span>15 Rating</span></div>
                                    <div className="price"><span>From <span className="text-danger">5k$-10k$</span></span></div>
                                    <div className="in-at"><span>Destination</span></div>
                                </div>
                                <div className="post-writer row my-3 justify-content-between align-items-center">
                                    <img src={writer} alt="" className="img-fluid profile col-3" />
                                    <p className='col-9'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit commodi itaque dolores laudantium nulla harum sunt magnam consequatur explicabo rem?</p>
                                </div>
                            </div>
                        </div>
                        <div className="card m-3">
                            <img src={BlogImg} className="card-img-top" alt="" />
                            <div className="card-body">
                                <h5 className="card-title">Europe Tour</h5>
                                <div className="rating row justify-content-between align-items-center px-3">
                                    <div className="rate"><span className='btn btn-secondary mr-4'>5.0</span><span>15 Rating</span></div>
                                    <div className="price"><span>From <span className="text-danger">5k$-10k$</span></span></div>
                                    <div className="in-at"><span>Destination</span></div>
                                </div>
                                <div className="post-writer row my-3 justify-content-between align-items-center">
                                    <img src={writer} alt="" className="img-fluid profile col-3" />
                                    <p className='col-9'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit commodi itaque dolores laudantium nulla harum sunt magnam consequatur explicabo rem?</p>
                                </div>
                            </div>
                        </div>
                        <div className="card m-3">
                            <img src={BlogImg} className="card-img-top" alt="" />
                            <div className="card-body">
                                <h5 className="card-title">Europe Tour</h5>
                                <div className="rating row justify-content-between align-items-center px-3">
                                    <div className="rate"><span className='btn btn-secondary mr-4'>5.0</span><span>15 Rating</span></div>
                                    <div className="price"><span>From <span className="text-danger">5k$-10k$</span></span></div>
                                    <div className="in-at"><span>Hotel</span></div>
                                </div>
                                <div className="post-writer row my-3 justify-content-between align-items-center">
                                    <img src={writer} alt="" className="img-fluid profile col-3" />
                                    <p className='col-9'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit commodi itaque dolores laudantium nulla harum sunt magnam consequatur explicabo rem?</p>
                                </div>
                            </div>
                        </div>
                        <div className="card m-3">
                            <img src={BlogImg} className="card-img-top" alt="" />
                            <div className="card-body">
                                <h5 className="card-title">Europe Tour</h5>
                                <div className="rating row justify-content-between align-items-center px-3">
                                    <div className="rate"><span className='btn btn-secondary mr-4'>5.0</span><span>15 Rating</span></div>
                                    <div className="price"><span>From <span className="text-danger">5k$-10k$</span></span></div>
                                    <div className="in-at"><span>Destination</span></div>
                                </div>
                                <div className="post-writer row my-3 justify-content-between align-items-center">
                                    <img src={writer} alt="" className="img-fluid profile col-3" />
                                    <p className='col-9'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit commodi itaque dolores laudantium nulla harum sunt magnam consequatur explicabo rem?</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Explore;