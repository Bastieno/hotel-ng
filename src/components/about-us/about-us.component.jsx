import React from 'react';
import { Link } from 'react-router-dom';
import aboutImg from '../../assets/about.png';
// import aboutBg from '../../assets/about-bg.png';
import './about-us.styles.scss';


export default function AboutUs() {
  return (
    <div className="about-container">
      <div className="about-top">
        <div className="about-top-content">
          <h1>ABOUT US</h1>
          <h2>A best place to enjoy your life</h2>
          <p>
            Transcorp Hilton Hotel is situated in the heart of Nigeria’s Federal Capital Territory,
            a 40-minute drive from the Nnamdi Azikiwe International Airport in Abuja. It is a 670–room,
            5-star hotel that provides luxury accommodation, exotic cuisine, and fully equipped meeting rooms and to business travellers and tourists from all over the world
          </p>
        </div>
      </div>
      <div className="about-bottom">
        <div className="about-img">
          <img src={aboutImg} alt=""/>
        </div>
        <div className="about-link">
          <Link to="/" >VIEW MORE PHOTOS</Link>
        </div>
      </div>

    </div>
  );
}
