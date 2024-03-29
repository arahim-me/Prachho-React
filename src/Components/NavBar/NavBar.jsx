import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Logo from '../../assets/logo/logo.png';
import NavItem from '../../Data/NavBar.json';
function NavBar() {
    return (
        <nav className="navbar navbar-expand-md navbar-light bg-light w-100">
            <div className="container">
                <Link className="navbar-brand" to="/"><img className='img-fluid logo' src={Logo} alt="" /></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav align-items-center">
                        {
                            NavItem.map(NavLink => {
                                const Menu = NavLink.name;
                                const Path = NavLink.route;
                                return (
                                    <li className="nav-item">
                                        <Link className="nav-link" to={`/${Path}`}>{Menu}</Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;

//Event
// https://www.visitmitchell.com/events/details/free-christmas-dinner-at-the-masonic-lodge-35454
// https://www.visittheusa.com/
//https://travel.state.gov/content/travel.html
//https://www.usa.gov/visit-united-states
// https://www.birminghamal.org/plan/
// https://nijhoom.com/bangladesh-photography-tour/?utm_source=nijhoom.com&utm_medium=Tour_Schedule_Sidebar&utm_campaign=Tour_Schedule