import React from 'react';
import BlogImg from '../../assets/images/explore/e3.jpg';
import writer from '../../assets/images/explore/person.png';
import './Explore.css';
function Explore() {
    return (
        <section className="blogs">
            <div className="container">
                <div className="inner my-5 p">
                    <div className="top-content">
                        <h2 className='title'>Explore</h2>
                        <h5 className='desc'>Explore New place, food, culture around the world and many more</h5>
                    </div>
                    <div className="cards row">
                        <div className="card">
                            <img src={BlogImg} className="card-img-top" alt="" />
                            <div className="card-body">
                                <h5 className="card-title">Europe Tour</h5>
                                <div className="rating row">
                                    <div className="row"><span className='rate'>5.0</span><span className='review'>15 Rating</span></div>
                                    <div className="price"><span className="text-danger">5k$-10k$</span></div>

                                </div>
                                <div className="post col">
                                    <div className="author row">
                                        <img src={writer} alt="" className="author-img" />
                                        <h6 className="author-name">Abdur Rahim</h6>
                                    </div>
                                    <p className='writing'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit commodi itaque dolores laudantium nulla harum sunt magnam consequatur explicabo rem?</p>
                                </div>
                                <div className="row"><button className="btn">View Post</button></div>
                            </div>
                        </div>
                        <div className="card">
                            <img src={BlogImg} className="card-img-top" alt="" />
                            <div className="card-body">
                                <h5 className="card-title">Europe Tour</h5>
                                <div className="rating row">
                                    <div className="row"><span className='rate'>5.0</span><span className='review'>15 Rating</span></div>
                                    <div className="price"><span className="text-danger">5k$-10k$</span></div>

                                </div>
                                <div className="post col">
                                    <div className="author row">
                                        <img src={writer} alt="" className="author-img" />
                                        <h6 className="author-name">Abdur Rahim</h6>
                                    </div>
                                    <p className='writing'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit commodi itaque dolores laudantium nulla harum sunt magnam consequatur explicabo rem?</p>
                                </div>
                                <div className="row"><button className="btn">View Post</button></div>
                            </div>
                        </div>
                        <div className="card">
                            <img src={BlogImg} className="card-img-top" alt="" />
                            <div className="card-body">
                                <h5 className="card-title">Europe Tour</h5>
                                <div className="rating row">
                                    <div className="row"><span className='rate'>5.0</span><span className='review'>15 Rating</span></div>
                                    <div className="price"><span className="text-danger">5k$-10k$</span></div>

                                </div>
                                <div className="post col">
                                    <div className="author row">
                                        <img src={writer} alt="" className="author-img" />
                                        <h6 className="author-name">Abdur Rahim</h6>
                                    </div>
                                    <p className='writing'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit commodi itaque dolores laudantium nulla harum sunt magnam consequatur explicabo rem?</p>
                                </div>
                                <div className="row"><button className="btn">View Post</button></div>
                            </div>
                        </div>
                        <div className="card">
                            <img src={BlogImg} className="card-img-top" alt="" />
                            <div className="card-body">
                                <h5 className="card-title">Europe Tour</h5>
                                <div className="rating row">
                                    <div className="row"><span className='rate'>5.0</span><span className='review'>15 Rating</span></div>
                                    <div className="price"><span className="text-danger">5k$-10k$</span></div>

                                </div>
                                <div className="post col">
                                    <div className="author row">
                                        <img src={writer} alt="" className="author-img" />
                                        <h6 className="author-name">Abdur Rahim</h6>
                                    </div>
                                    <p className='writing'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit commodi itaque dolores laudantium nulla harum sunt magnam consequatur explicabo rem?</p>
                                </div>
                                <div className="row"><button className="btn">View Post</button></div>
                            </div>
                        </div>
                        <div className="card">
                            <img src={BlogImg} className="card-img-top" alt="" />
                            <div className="card-body">
                                <h5 className="card-title">Europe Tour</h5>
                                <div className="rating row">
                                    <div className="row"><span className='rate'>5.0</span><span className='review'>15 Rating</span></div>
                                    <div className="price"><span className="text-danger">5k$-10k$</span></div>

                                </div>
                                <div className="post col">
                                    <div className="author row">
                                        <img src={writer} alt="" className="author-img" />
                                        <h6 className="author-name">Abdur Rahim</h6>
                                    </div>
                                    <p className='writing'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit commodi itaque dolores laudantium nulla harum sunt magnam consequatur explicabo rem?</p>
                                </div>
                                <div className="row"><button className="btn">View Post</button></div>
                            </div>
                        </div>
                        <div className="card">
                            <img src={BlogImg} className="card-img-top" alt="" />
                            <div className="card-body">
                                <h5 className="card-title">Europe Tour</h5>
                                <div className="rating row">
                                    <div className="row"><span className='rate'>5.0</span><span className='review'>15 Rating</span></div>
                                    <div className="price"><span className="text-danger">5k$-10k$</span></div>

                                </div>
                                <div className="post col">
                                    <div className="author row">
                                        <img src={writer} alt="" className="author-img" />
                                        <h6 className="author-name">Abdur Rahim</h6>
                                    </div>
                                    <p className='writing'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit commodi itaque dolores laudantium nulla harum sunt magnam consequatur explicabo rem?</p>
                                </div>
                                <div className="row"><button className="btn">View Post</button></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Explore;