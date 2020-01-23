import React from 'react';
import { Link } from 'react-router-dom';
import './navigation-bar.styles.scss';
import logo from '../../assets/transcorp-1.png';


export default function NavigationBar() {
  return (
    <div className="nav-container">
      <div className="nav-top">
        <div className="nav-top-left">
          <p>Contact us directly at 01 33943  +234 807 340 4890 ( Local time 12: 00 ) </p>
        </div>
        <div className="nav-top-right">
          <p>EN &#x2228;</p>
        </div>
      </div>
      <ul className="nav-bottom">
        <li className="">
          <Link to="/" className="nav-link">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-link">About Us</Link>
        </li>
        <li className="nav-item">
          <Link to="/rooms" className="nav-link">Our Rooms</Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-link">
            <img src={logo} alt="hotel-img"/>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/reservation" className="nav-link">Reservation</Link>
        </li>
        <li className="nav-item">
          <Link to="/blog" className="nav-link">Blog</Link>
        </li>
        <li className="nav-item">
          <Link to="/contact" className="nav-link">Contact</Link>
        </li>
      </ul>
      </div>
  );
}
