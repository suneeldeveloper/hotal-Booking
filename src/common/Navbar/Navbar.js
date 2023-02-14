import React, { useState } from "react";
import { Link } from "react-router-dom";
import MainLogo from "../../Images/logo.png";
import "./Navbar.css";
import "../../App.css";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className="navbar">
        <div className="container flex-space">
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li>
              <Link to="/" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={closeMobileMenu}>
                About
              </Link>
            </li>
            <li>
              <Link to="/gallery" onClick={closeMobileMenu}>
                Gallery
              </Link>
            </li>
            <li>
              <Link to="/destination" onClick={closeMobileMenu}>
                Destination
              </Link>
            </li>
            <li>
              <Link to="/blogs" onClick={closeMobileMenu}>
                Blogs
              </Link>
            </li>
            <li>
              <Link to="/testimonail" onClick={closeMobileMenu}>
                Testimonail
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={closeMobileMenu}>
                Contact
              </Link>
            </li>
          </ul>

          <div className="login-area flex">
            <li>
              <Link to="/sign-in">
                <i className="fa fa-sign-in"></i>Sign In
              </Link>
            </li>
            <li>
              <Link to="/register">
                <i className="fa fa-sign-in"></i>Register
              </Link>
            </li>
            <li>
              <Link to="/contact">
                <button className="primary-btn">Request a Quote</button>
              </Link>
            </li>
          </div>
        </div>
      </nav>

      <header>

        <div className="container flex-space">
          <div className="logo">
            <img src={MainLogo} alt="MainLogo" />
          </div>
          
          <div className="contact flex-space">
            <div className="box flex-space">
              <div className="icons">
                <i className="fas fa-clock"></i>
              </div>

              <div className="text">
                <h4>Working Hours</h4>
                <Link to="/contact">Monday - Sunday: 9:00am to 6:00pm</Link>
              </div>
            </div>
            <div className="box flex-space">
              <div className="icons">
                <i className="fas fa-phone-volume"></i>
              </div>

              <div className="text">
                <h4>Call Us</h4>
                <Link to="/contact">+92 333 3457 731</Link>
              </div>
            </div>
            <div className="box flex-space">
              <div className="icons">
                <i className="fas fa-envelope"></i>
              </div>

              <div className="text">
                <h4>Mail Us</h4>
                <Link to="/contact">newLucky@gmail.com</Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
