import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCircle, faCaretDown, faPaperPlane, faAngleDown } from '@fortawesome/free-solid-svg-icons';


import HomePage from './pages/homepage/homepage.component';
import DashboardPage from './pages/dashboard-page/dashboard-page.component';
import NotFoundPage from './pages/notfound-page/notfound-page.component';

import './App.css';

library.add(faCircle, faCaretDown, faPaperPlane, faAngleDown, fab);

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/dashboard" component={DashboardPage} />
          <Route exact component={NotFoundPage} />
        </Switch>
      </Router>
    </>
  );
}

export default App;

