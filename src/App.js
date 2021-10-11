import React from 'react';
import Sidebar from "./components/Sidebar";
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Explore from './pages/Explore';
import Notifications from './pages/Notifications';
import Profile from './pages/Profile';

function App() {
  return (
    <>
    <Router>
     <Sidebar />
     <Switch>
     <Route path='/' exact component={Home} />
     <Route path='/explore' exact component={Explore} />
     <Route path='/notifications' exact component={Notifications} />
     <Route path='/profile' exact component={Profile} />
     </Switch>
    </Router>
    </>
  );
}

export default App;
