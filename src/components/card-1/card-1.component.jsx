import React from 'react';
import { ReactComponent as BlueClock } from '../../assets/svg/blue-clock.svg';
import { ReactComponent as GreenClock } from '../../assets/svg/green-clock.svg';
import { ReactComponent as RedMoney } from '../../assets/svg/red-money.svg';
import { ReactComponent as BlueMoney } from '../../assets/svg/blue-money.svg';
import { ReactComponent as YellowMoney } from '../../assets/svg/yellow-money.svg';
import { ReactComponent as GreenMoney } from '../../assets/svg/green-money.svg';
import './card-1.styles.scss';

export const Card1 = () => {
  return (
    <div className="col-60">
      <div className="card1">
        <div className="card-header">
          <div className="left">
            <BlueClock className="clock-logo" />
            <p>Total Annual CAPEX Budget</p>
            <span>N 50,000,000</span>
          </div>
          <div className="right">
            <span>Annual</span>
          </div>
        </div>
        <div className="card-content">
          <div className="donut-graph"></div>
          <div className="description">
            <div className="top">
              <GreenMoney className="money-icon" />
              <div className="text">
                <p>Total CAPEX Spent</p>
                <p>N 18,000,000</p>
              </div>
            </div>
            <div className="bottom">
              <RedMoney className="money-icon" />
              <div className="text">
                <p>Total CAPEX Balance</p>
                <p>N 32,000,000</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card1">
        <div className="card-header">
          <div className="left">
            <GreenClock className="clock-logo" />
            <p>Total Annual OPEX Budget</p>
            <span>N 50,000,000</span>
          </div>
          <div className="right">
            <span>Annual</span>
          </div>
        </div>
        <div className="card-content">
          <div className="donut-graph"></div>
          <div className="description">
            <div className="top">
              <BlueMoney className="money-icon" />
              <div className="text">
                <p>Total OPEX Spent</p>
                <p>N 18,000,000</p>
              </div>
            </div>
            <div className="bottom">
              <YellowMoney className="money-icon" />
              <div className="text">
                <p>Total OPEX Balance</p>
                <p>N 32,000,000</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card1;

