import React from 'react';
import ZingChart from 'zingchart-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './card-3.styles.scss';

class Card3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      config: {
        type: "bar",
        plotarea: {
          adjustLayout: true
        },
        scaleX: {
          labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
          "item": {
            "offsetY": 2,
            "angle": 0
          },
          "tick": {
            "size": 1
          }
        },
        "plot": {
          "bars-space-left": 0.3,
          "bars-space-right": 0.15
        },
        "tooltip": {
          "visible": false
        },
        "crosshair-x": {
          "line-width": "100%",
          "alpha": 0.4,
        },
        series: [
          {
            values: [11, 23, 11, 22, 9, 46, 7, 4, 38, 13, 12, 11],
            "text": "Spent",
            'background-color': "#e95957",
          },
          {
            values: [15, 13, 34, 18, 42, 28, 32, 15, 33, 15, 17, 5],
            "text": "Balance",
            'background-color': "#17c7bf"
          }
        ]
      }
    };
  }

  render() {
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
            <div className="card-chart">
              <ZingChart height="300" width="100%" data={this.state.config} />
            </div>
            <div className="chart-legend">
              <p className="spent">
                <FontAwesomeIcon
                  icon="circle"
                  className="icon"
                  size="xs"
                />Spent</p>
              <p className="balance">
                <FontAwesomeIcon
                  icon="circle"
                  className="icon"
                  size="xs"
                />Balance</p>
            </div>
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
            <div className="card-chart">
              <ZingChart height="300" width="100%" data={this.state.config} />
            </div>
            <div className="chart-legend">
              <p className="spent">
                <FontAwesomeIcon
                  icon="circle"
                  className="icon"
                  size="xs"
              />Spent</p>
              <p className="balance">
                <FontAwesomeIcon
                  icon="circle"
                  className="icon"
                  size="xs"
                />Balance</p>
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default Card3;

