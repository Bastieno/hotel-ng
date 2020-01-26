import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import heroImg from '../../assets/hero-img.png';
import playImg from '../../assets/play-circle.png';
import './hero-mast.styles.scss';


export default function HeroMast() {
  return (
    <div className="hero-container">
      <div className="hero-img-overlay"></div>
      <div className="hero-img-container">
        <div className="hero-img">
          <img src={heroImg} alt="hero-img"/>
        </div>
        <div className="image-content">
          <h3>WELCOME TO</h3>
          <p>Transcorp Hotel</p>
          <span>A place to experience and enjoy the life</span>
          <div>
           <img src={playImg} alt="play-button"/>
          </div>
        </div>
      </div>
      <div className="hero-card">
        <div className="left-content">
          <div className="checkin">
            <h3>CHECK IN</h3>
            <div>
              <p className="checkin-date"><span>24</span>/JUNE</p> <span><FontAwesomeIcon icon='angle-down' /></span>
            </div>
          </div>
          <div className="checkout">
            <h3>CHECK OUT</h3>
            <div>
              <p className="checkout-date"><span>29</span>/JUNE</p> <span><FontAwesomeIcon icon='angle-down' /></span>
            </div>
          </div>
          <div className="guests">
            <h3>GUESTS</h3>
            <div>
              <p className="guests-number"><span>03</span></p> <span><FontAwesomeIcon icon='angle-down' /></span>
            </div>
          </div>
        </div>
        <div className="right-content">
          <p>Have a promotional code ?</p>
          <button>CHECK AVAILABILITY</button>
        </div>
      </div>

    </div>
  );
}
