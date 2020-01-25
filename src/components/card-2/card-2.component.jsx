import React from 'react';
import { ReactComponent as RedClock } from '../../assets/svg/red-clock.svg';
import { ReactComponent as GreenClock } from '../../assets/svg/green-clock.svg';
import { ReactComponent as YellowClock } from '../../assets/svg/yellow-clock.svg';
import './card-2.styles.scss';

export const Card2 = () => {
  return (
    <div className="col-40">
      <div className="card2">
        <div className="card2-header"><YellowClock className="logo"/> <p>Pending Budget Reassignment Status</p></div>
        <button>200</button>
      </div>
      <div className="card2">
        <div className="card2-header"><GreenClock className="logo"/> <p>Pending Budget Reassignment Status</p></div>
        <button>373</button>
      </div>
      <div className="card2">
        <div className="card2-header"><RedClock className="logo"/> <p>Pending Budget Reassignment Status</p></div>
        <button>372</button>
      </div>
    </div>
  )
}

export default Card2;

