import React from 'react';
import './blog.styles.scss';
import blogImg1 from '../../assets/blog-img-1.png';
import blogImg2 from '../../assets/blog-img-2.png';
import blogImg3 from '../../assets/blog-img-3.png';


export default function Blog() {
  return (
    <div className="blog-container">
      <h1>Latest from our Blog</h1>
      <div className="blog-list">
        <div className="blog-card">
          <img src={blogImg1} alt="blog1-img" />
          <div className="card-content">
            <h3>April 10th, 2018</h3>
            <p>Five reasons to  stay at the beautiful Transcorp Hotel</p>
            <span>Continue</span> <span> ➡ </span>
          </div>
        </div>
        <div className="blog-card">
          <img src={blogImg2} alt="blog2-img" />
          <div className="card-content">
            <h3>April 10th, 2018</h3>
            <p>Five reasons to  stay at the beautiful Transcorp Hotel</p>
            <span>Continue</span> <span> ➡ </span>
          </div>
        </div>
        <div className="blog-card">
          <img src={blogImg3} alt="blog3-img" />
          <div className="card-content">
            <h3>April 10th, 2018</h3>
            <p>Five reasons to  stay at the beautiful Transcorp Hotel</p>
            <span>Continue</span> <span> ➡ </span>
          </div>
        </div>
      </div>
    </div>
  );
}
