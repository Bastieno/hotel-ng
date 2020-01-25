import React from 'react';
import Sidenav from '../../components/sidenav/sidenav.component';
import Header from '../../components/header/header.component';
import Card1 from '../../components/card-1/card-1.component';
import Card2 from '../../components/card-2/card-2.component';
import Card3 from '../../components/card-3/card-3.component';
import './dashboard-page.styles.scss';

export default function DashBoardPage() {
  return (
    <div class="dashboard-container">
      <Sidenav />
      <div id="main">
        <Header />
        <div className="top-content">
          <h3>Dashboard</h3>
          <span>20 Dec 2019, Friday</span>
        </div>
        <div className="row1">
          <Card1 />
          <Card2 />
        </div>
        <div className="row2">
          <Card3 />
        </div>
      </div>
    </div>
  );
}
