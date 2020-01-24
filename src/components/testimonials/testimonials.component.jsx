import React from 'react';
import './testimonials.styles.scss';
import testimonialImg from '../../assets/oval.png';


export default function Testimonials() {
  return (
    <div className="testimonial-container">
      <div className="testimonial-bg">
        <div className="testimonial-carousel">
          <div className="testimonial-card">
            <h1>TESTIMONIALS</h1>
            <h2>What guests Say</h2>
            <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce commodo urna id neque finibus,
              ac sollicitudin arcu tempus. In hac habitasse platea dictumst”
            </p>
            <div className="card-img-container">
              <div className="card-img">
                <img src={testimonialImg} alt="testimonial-img"/>
              </div>
              <p>FARAH WILIAMS</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
