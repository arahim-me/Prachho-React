import React from 'react';
import NavBar from '../NavBar/NavBar';
import './Footer.css';
import Logo from '../../assets/logo/logo.png';
function Footer() {
    return (
        <footer id="footer" className="footer">
            
            <NavBar></NavBar>
            <div className="container inner">
                
                <h6>Copyright &copy; 2023 || Prachho || All Right Reserved</h6>
                <div className="footer-social">
                    <span><i className="fa fa-phone"> +88 01738906615</i></span>
                    <a href="https://www.facebook.com/prachho.net"><i className="fab fa-facebook"></i></a>
                    <a href="https://www.facebook.com/prachho.net"><i className="fab fa-twitter"></i></a>
                    <a href="https://www.facebook.com/prachho.net"><i className="fab fa-linkedin"></i></a>
                    <a href="https://www.facebook.com/prachho.net"><i className="fab fa-google-plus"></i></a>
                </div>
            </div>

            <div id="scroll-Top">
                <div className="return-to-top">
                    <i className="fa fa-angle-up " id="scroll-top" data-toggle="tooltip" data-placement="top" title="" data-original-title="Back to Top" aria-hidden="true"></i>
                </div>

            </div>

        </footer>
    );
}

export default Footer;