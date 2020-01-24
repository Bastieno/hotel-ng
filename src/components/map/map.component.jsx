import React from 'react';
import './map.styles.scss';
import mapImg from '../../assets/map-img.png';



export default function Map() {
  return (
    <div className="map-container">
      <div className="left-content">
        <img src={mapImg} alt="map-img"/>
      </div>
      <div className="right-content">
        <h1>DISCOVER OUR ROOMS</h1>
        <h2>Luxury interior</h2>
        <h3>Abuja, <span>Nigeria</span></h3>
        <p>Address: 1 Aguiyi Ironsi St, Abuja 900001, Nigeria</p>
        <p>Email: info@transcorphotelsplc.com</p>
        <h4>Call directly;</h4>
        <h5>+234 708 060 3000</h5>
      </div>
    </div>
  );
}
