import React, { ReactElement } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import {Weather} from "./components/weather-page/Weather";
import { HomePage } from './Home';
import { MarsRover } from './rover/marsRover';
import { Navbar } from './components/navbar/Navbar';
import { MissionPage } from './components/missions-page/MissionPage';


export function App(): ReactElement {
  return (
    <Router>
     <Navbar/>
      <Switch>

        <Route path="/weather">
          <Weather />
        </Route>

        <Route path="/missions">
          <MissionPage/>
        </Route>

        <Route path="/rovers">
          <MarsRover />
        </Route>

        <Route path="/">
          <HomePage/>
        </Route>
        
      </Switch>
    </Router>
  );
}
