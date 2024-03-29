import React from 'react';
import './TopNav.css';
import { Link } from 'react-router-dom';
import { FaFacebook, FaLinkedin, FaSearchLocation, FaTwitter, FaYoutube } from "react-icons/fa";
function TopNav() {
    return (
        <div className="topNav">
            <div className="container">
                <div className="function">
                    <select name="language" id="language" className='select language'>
                        <option value="EN">EN</option>
                        <option value="BN">BN</option>
                        <option value="AB">AB</option>
                    </select>
                    <select name="currency" id="currency" className='select currency'>
                        <option value="USD">USD</option>
                        <option value="URO">URO</option>
                        <option value="BDT">BDT</option>
                    </select>
                </div>
                <select name="" id="" className='packeges'>
                    <option value="Domestic"><Link to={'/packeges/:id'}>Domestic</Link></option>
                    <option value="International"><Link to={'/packeges/:id'}>International</Link></option>
                </select>
                <div className="socialLink">
                    <div className="inner">
                        <Link className='icon' to={'/'}><FaFacebook></FaFacebook></Link>
                        <Link className='icon' to={'/'}><FaLinkedin></FaLinkedin></Link>
                        <Link className='icon' to={'/'}><FaTwitter></FaTwitter></Link>
                        <Link className='icon' to={'/'}><FaYoutube></FaYoutube></Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TopNav;