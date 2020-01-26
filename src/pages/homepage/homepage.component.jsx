import React from 'react';
import NavigationBar from '../../components/navigation-bar/navigation-bar.component';
import HeroMast from '../../components/hero-mast/hero-mast.component';
import AboutUs from '../../components/about-us/about-us.component';
import RoomsSection from '../../components/rooms/rooms.component';
import Testimonials from '../../components/testimonials/testimonials.component';
import Blog from '../../components/blog/blog.component';
import Map from '../../components/map/map.component';
import Footer from '../../components/footer/footer.component';

import './homepage.styles.scss';

export default function HomePage() {
  return (
    <div className="homepage">
      <NavigationBar />
      <HeroMast />
      <AboutUs />
      <RoomsSection />
      <Testimonials />
      <Blog />
      <Map />
      <Footer />
    </div>
  );
}
