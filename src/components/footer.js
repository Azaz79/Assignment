import React from 'react'
import logo from '../logo.png'

const Footer = () => {
    return (

        <div className="fixed-down navbar-expand-lg navbar-dark bg-darkc">
            <div className="container footer">
                <div className="row px-md-3 section">
                    <div className='col-sm-6 col-lg-2 py-3'><img src={logo} width="100px" height="50px" alt=""></img><br />
                        <i></i><span /><i></i><span /><i></i>
                    </div>

                    <div className="col-sm-6 col-lg-2 py-3">
                        
                        <ul className="footer-menu">
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Sitemap</a></li>
                            <li><a href="#">Credits</a></li>
                            <li><a href="#">Help Center</a></li>
                            <li><a href="#">Community Guidlines</a></li>
                        </ul>
                    </div>
                    <div className="col-sm-6 col-lg-2 py-3">
                        
                        <ul className="footer-menu">
                            <li><a href="#">Accessibility</a></li>
                            <li><a href="#">Mobile</a></li>
                            <li><a href="#">Marketing</a></li>
                            <li><a href="#">Advertising</a></li>
                            <li><a href="#">Report Abuse</a></li>
                        </ul>
                    </div>
                    <div className="col-sm-6 col-lg-3 py-3">
                        
                        <ul className="footer-menu">
                            <li><a href="#">Privacy policy</a></li>
                            <li><a href="#">Terms & Conditions</a></li>
                            <li><a href="#">Trust & Safety</a></li>
                        </ul>
                    </div>
                    <div className="col-sm-6 col-lg-3 py-0 d-flex flex-column">
                        <a href="#" className="footer-link"><img src={logo} width="100px" height="50px" alt=""></img>
</a>
                        <a href="#" className="footer-link"><img src={logo} width="100px" height="50px" alt=""></img>
</a>
                    </div>
                </div>

                <hr />

                <p id="copyright" className='section'>Copyright &copy; 2023 <a href="/" target="_blank">asapp</a>. All right reserved</p>
            </div>
            
        </div>

    )
}

export default Footer
