import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import DashboardPage from './pages/dashboard-page/dashboard-page.component';
import NotFoundPage from './pages/notfound-page/notfound-page.component';

import './App.css';

function App() {
  return (
    <>
      <Router>
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

