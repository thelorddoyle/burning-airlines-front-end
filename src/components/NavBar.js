import React from 'react';
import '../App.css';
import {HashRouter as Router, Route, Link} from 'react-router-dom'
import FlightsSearch from './FlightsSearch'
import FlightResults from './FlightResults'
import PageToBookFlight from './PageToBookFlight';
import FlightPathQuery from './FlightPathQuery'
import CreateFlight from './CreateFlight'
import CreatePlane from './CreatePlane'
import Home from './Home'


class NavBar extends React.Component{

  render(){
    return(
      <div>
      <Router>
        <h2>BURNING AIRLINES</h2>
        <nav>

        <Link to="/">My Account</Link> |&nbsp;
        <Link to="/flights">Flight Search</Link> |&nbsp;
        <Link to="/flights/create">Flight Create</Link> |&nbsp;
        <Link to="/airplanes/create">Plane Create</Link>

        <h3>GA Airlines</h3>


        <Route exact path = '/' component={Home} />
        <Route exact path = '/flights' component={ FlightsSearch } />
        <Route exact path = '/flights/:id' component={PageToBookFlight} />
        <Route exact path = '/flights/search/:origin/:destination' component={FlightPathQuery} />
        
        <Route exact path ='/flights/create' component={CreateFlight}></Route>
        <Route exact path ='/airplanes/create' component={CreatePlane}></Route>
        
        
        </nav>
      </Router>
      </div>
    );//return
  }//render

}//class NavBar

export default NavBar;
