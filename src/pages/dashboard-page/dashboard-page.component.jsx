import React from 'react';
import { Link } from 'react-router-dom';
import './dashboard-page.styles.scss';

export default function DashBoardPage() {
  return (
    <div class="dashboard-container">
      <div id="mySidenav" class="sidenav">
        <Link to="/">Home</Link>
        <Link to="/">About</Link>
        <Link to="/">Services</Link>
        <Link to="/">Clients</Link>
        <Link to="/">Contact</Link>
      </div>
      <div id="main">
        <header className="nav-bar">
          <div className="menu-icon"></div>
          <div className="user-info"></div>
        </header>
        <div className="top-content">
          <h3>Dashboard</h3>
          <span>20 Dec 2019, Friday</span>
        </div>
        <div className="row1">
          <div className="col-60">
            <div className="card1">
              <div className="card-header">
                <span>Total Annual CAPEX Budget</span>
                <span>N 50,000,000</span>
                <span>Annual</span>
              </div>
              <div className="card-content">
                <div className="donut-graph"></div>
                <div className="description">
                  <div className="top">
                    <div className="icon"></div>
                    <div>
                      <p>Total CAPEX Spent</p>
                      <p>N 18,000,000</p>
                    </div>
                  </div>
                  <div className="bottom">
                    <div className="icon"></div>
                    <div>
                      <p>Total CAPEX Balance</p>
                      <p>N 32,000,000</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card1">
              <div className="card-header">
              <span>Total Annual CAPEX Budget</span>
              <span>N 50,000,000</span>
              <span>Annual</span>
            </div>
            <div className="card-content">
              <div className="donut-graph"></div>
              <div className="description">
                <div className="top">
                  <span className="icon"></span>
                  <div>
                    <p>Total CAPEX Spent</p>
                    <p>N 18,000,000</p>
                  </div>
                </div>
                <div className="bottom">
                  <div className="icon"></div>
                  <div>
                    <p>Total CAPEX Balance</p>
                    <p>N 32,000,000</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
          <div className="col-40">
            <div className="card2">
              <div className="card2-header">Pending Budget Reassignment Status</div>
              <button>200</button>
            </div>
            <div className="card2">
              <div className="card2-header">Pending Budget Reassignment Status</div>
              <button>373</button>
            </div>
            <div className="card2">
              <div className="card2-header">Pending Budget Reassignment Status</div>
              <button>372</button>
            </div>
          </div>
        </div>
        <div className="row2">
          <div className="col-50">
            <div className="card3">
              <h2>TOTAL OPEX Budget Statistics</h2>
              <p>Total Budget Spent vs Total Budget Balance</p>
              <div>
                <span>Total Spent</span> <span>N 8,282,289</span>
                <span>Total balance</span> <span>N 8,282,289</span>
              </div>
              <div className="card-chart">chart area</div>
            </div>
          </div>
          <div className="col-50">
            <div className="card3">
              <h2>TOTAL OPEX Budget Statistics</h2>
              <p>Total Budget Spent vs Total Budget Balance</p>
              <div>
                <span>Total Spent</span> <span>N 8,282,289</span>
                <span>Total balance</span> <span>N 8,282,289</span>
              </div>
              <div className="card-chart">chart area</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
