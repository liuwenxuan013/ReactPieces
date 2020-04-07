import React from 'react';
import { Link } from 'react-router-dom';
import '../../container/Layout/Layout.css';

function Nav()
{
    return (
        <div className="menu ">


<nav className="navbar ">
            <ul className="navbar-nav">
                <li className="nav-item" style={{padding:"35px"}}>

                        <img src="./images/vision.jpg" alt="logo" className="rounded-circle" style={{ width: "40px" }} />

                </li>


                <li className="nav-item">
                    <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/about">Why me?</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/features">Know more about me</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/profile">Profile</Link>
                </li>

                <li className="nav-item">
                    <Link className="nav-link" to="/contact">Contact me</Link>
                </li>
            </ul>
</nav>
        </div>

    );
}
export default Nav;
