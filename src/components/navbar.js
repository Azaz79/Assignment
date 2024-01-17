import React from 'react'
import { Link } from "react-router-dom";
import Brand from "../logo.png"

const NavBar = (props) => {
    return (
        <div>
            <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid section">
                    <Link className="navbar-brand" to="/"><img className='brand' src={Brand} width={80} height={30} alt="formease"></img></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                            <li className="nav-item"><Link className="nav-link active" to='/'>Home</Link></li>
                            <li className="nav-item"><Link className="nav-link" to='/result'>Results</Link></li>
                            <li className="nav-item"><Link className="nav-link" to='/faq'>FAQs</Link></li>
                            <li className="nav-item"><Link className="nav-link" to='/about'>About Us</Link></li>
                            <li className="nav-item"><Link className="nav-link" to='/contact'>Contact Us</Link></li>
                            
                        </ul>

                        <form className="d-flex">
                            <input className="form-control me-2"id='myinput' type="search" placeholder="Search..." aria-label="Search"/>
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                        </div>
                </div>
            </nav>     

  </div>
 )

}

export default NavBar