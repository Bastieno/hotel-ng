import React from 'react';
import ZingChart from 'zingchart-react';
import { ReactComponent as BlueClock } from '../../assets/svg/blue-clock.svg';
import { ReactComponent as GreenClock } from '../../assets/svg/green-clock.svg';
import { ReactComponent as RedMoney } from '../../assets/svg/red-money.svg';
import { ReactComponent as BlueMoney } from '../../assets/svg/blue-money.svg';
import { ReactComponent as YellowMoney } from '../../assets/svg/yellow-money.svg';
import { ReactComponent as GreenMoney } from '../../assets/svg/green-money.svg';
import './card-1.styles.scss';

class Card1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      config: {
        type: 'pie',
        plot: {
          tooltip: {
            rules: [
              {
                text: '%v%t Completed',
                borderRadius: '4px',
                rule: '%v > 0',
                shadow: false
              },
              {
                text: '%v%t Remaining',
                borderRadius: '4px',
                rule: '%v > 0',
                shadow: false
              }
            ]
          },
          valueBox: {
            type: 'first',
            text: '%v% \n Remaining',
            connected: false,
            fontColor: '#000000',
            fontSize: '12px',
            fontFamily: 'Source Sans Pro',
            placement: 'center',
            rules: [
              {
                rule: '%v < 0',
                visible: false
              }
            ],
            visible: true
          },
          animation: {
            delay: 0,
            effect: 'ANIMATION_EXPAND_VERTICAL',
            method: 'ANIMATION_LINEAR',
            sequence: 'ANIMATION_BY_PLOT',
            speed: '600'
          },
          detach: false,
          hoverState: {
            visible: false
          },
          refAngle: 270,
          slice: 50
        },
        plotarea: {
          // margin: '20% 10% 30% 10%'
          margin: '10% 10% 15% 10%'
        },
        valueBox: {
          visible: true
        },
        series: [
          {
            text: '%',
            values: [50],
            // backgroundColor: '#8AB839',
            backgroundColor: '#6915cf',
            borderWidth: '0px',
            shadow: false
          },
          {
            values: [50],
            text: '%',
            alpha: 0.5,
            backgroundColor: '#dadada',
            borderColor: '#dadada',
            borderWidth: '1px',
            shadow: false
          }
        ]
      },
    };
  }

  render() {
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
            <div className="donut-graph">
              <ZingChart height="170" width="170" data={this.state.config} />
            </div>
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
            <div className="donut-graph">
              <ZingChart height="170" width="170" data={this.state.config} />
            </div>
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
  }
};

export default Card1;

