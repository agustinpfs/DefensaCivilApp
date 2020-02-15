import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import './App.css';

import Navigation from './components/Navigation'
import GeoRender from './components/GeoRender'
import EventsGeo from './components/EventsGeo'
import EventsConsultor from './components/EventsConsultor'
import LoadData from './components/LoadData'
// import ListEvents from './components/ListEvents'

function App() {
  return (

    <Router>
      <Navigation />

      <div className="container p-4">
        <Route path="/geo" component={GeoRender} />
        <Route path="/geoevents" component={EventsGeo} />
        <Route path="/consultorevents" component={EventsConsultor} />
        <Route path="/loaddata" component={LoadData} />
        {/* <Route path="/ListEvents" component={ListEvents} /> */}
        {/* <Route path="/geo2" exact component={GeoRender} /> */}
      </div>
      
    </Router>
  );
}

export default App;
