import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import packsData from '../../Data/Packages.json';
import packImg from '../../assets/images/explore/e3.jpg'
function PackDetails() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [title, setTitle] = useState();
    const [avgRating, setAvgRating] = useState();
    const [totalRating, setTotalRating] = useState();
    const [price, setPrice] = useState();
    const [desc, setDesc] = useState();
    useEffect(() => {
        const packs = packsData.filter((pack) => pack.id == id);
        setTitle(packs[0].title);
        setAvgRating(packs[0].rating.avg);
        setTotalRating(packs[0].rating.total);
        setPrice(packs[0].price);
        setDesc(packs[0].desc);
    }, [])
    return (
        <div className="container display" key={id}>
            <button className='btn mt-3' onClick={() => { navigate('/packages') }}>Back to Packages</button>
            <div className="card">
                <img src={packImg} className="card-img-top" alt="" />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <div className="rating row">
                        <div className="row"><span className='rate'>{avgRating}</span><span className='review'>{totalRating} Rating</span></div>
                        <div className="price"><span className="text-danger">{price}</span></div>
                    </div>
                    <div className="post col">
                        <p className='writing'>{desc}</p>
                    </div>                    
                </div>
            </div>

        </div>
    );
}

export default PackDetails;