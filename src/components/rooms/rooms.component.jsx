import React from 'react';
import room from '../../assets/room-md-1.png';
import room1 from '../../assets/room-sm-1.png';
import room2 from '../../assets/room-sm-2.png';
import room3 from '../../assets/room-sm-3.png';
import './rooms.styles.scss';


export default function RoomsSection() {
  return (
    <div className="rooms-container">
      <div className="left-container">
        <div className="left-container-content">
          <h1>DISCOVER OUR ROOMS</h1>
          <h2>Luxury interior</h2>
          <div className="room-list">
            <div className="room-item">
              <img src={room1} alt="room-1" />
              <div className="room-details">
                <span className="name"> Classic Room</span>
                <span className="price"> Starting from $40.00/Night</span>
              </div>
            </div>
            <div className="room-item">
              <img src={room2} alt="room-2" />
              <div className="room-details">
                <span className="name"> Classic Room</span>
                <span className="price"> Starting from $40.00/Night</span>
              </div>
            </div>
            <div className="room-item">
              <img src={room3} alt="room-3" />
              <div className="room-details">
                <span className="name"> Classic Room</span>
                <span className="price"> Starting from $40.00/Night</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="right-container">
        <img src={room} alt="room-md-1"/>
      </div>
    </div>
  );
}
