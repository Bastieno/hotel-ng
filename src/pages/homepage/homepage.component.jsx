import React from 'react';
import HeroMast from '../../components/hero-mast/hero-mast.component';
import AboutUs from '../../components/about-us/about-us.component';
import RoomsSection from '../../components/rooms/rooms.component';

import './homepage.styles.scss';

export default function HomePage() {
  return (
    <div className="homepage">
      <HeroMast />
      <AboutUs />
      <RoomsSection />
    </div>
  );
}
