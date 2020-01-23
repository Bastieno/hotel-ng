import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import DashboardPage from './pages/dashboard-page/dahboard-page.component';
import NotFoundPage from './pages/notfound-page/notfound-page.component';
import NavigationBar from './components/navigation-bar/navigation-bar.component';
// import Footer from './components/footer/footer.component';

// Scripts
// import 'jquery/dist/jquery.min.js';
// import 'popper.js/dist/popper.min.js';
// import 'bootstrap/dist/js/bootstrap.min.js';
// Styles
// import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <>
      <Router>
        <NavigationBar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/dashboard" component={DashboardPage} />
          <Route exact component={NotFoundPage} />
        </Switch>
        {/* <Footer /> */}
      </Router>
    </>
  );
}

export default App;

