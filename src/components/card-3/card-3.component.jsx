import React from 'react';
import './card-3.styles.scss';

export const Card3 = () => {
  return (
   <>
      <div className="col-50">
        <div className="card3">
          <h2>TOTAL OPEX Budget Statistics</h2>
          <p>Total Budget Spent vs Total Budget Balance</p>
          <div className="chart-info">
            <div className="spent">
              <span>Total Spent</span> <span className="green">N 8,282,289</span>
            </div>
            <div className="balance">
              <span>Total Balance</span> <span className="red">N 8,282,289</span>
            </div>
          </div>
          <div className="card-chart"></div>
        </div>
      </div>
      <div className="col-50">
        <div className="card3">
          <h2>TOTAL OPEX Budget Statistics</h2>
          <p>Total Budget Spent vs Total Budget Balance</p>
          <div className="chart-info">
            <div className="spent">
              <span>Total Spent</span> <span className="green">N 8,282,289</span>
            </div>
            <div className="balance">
              <span>Total Balance</span> <span className="red">N 8,282,289</span>
            </div>
          </div>
          <div className="card-chart"></div>
        </div>
      </div>
   </>
  );
};

export default Card3;

