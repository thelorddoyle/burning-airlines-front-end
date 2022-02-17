import React from 'react';
import '../App.css';
import {HashRouter as Router, Route, Link} from 'react-router-dom'
import FlightsSearch from './FlightsSearch'
import FlightResults from './FlightResults'
import PageToBookFlight from './PageToBookFlight';
import FlightPathQuery from './FlightPathQuery'

class NavBar extends React.Component{

  render(){
    return(
      <div>
      <Router>
        <h2>BURNING AIRLINES</h2>
        <nav>

        <Link to="/">My Account</Link> |&nbsp;
        <Link to="/flights">Flight Search</Link>

        <h3>GA Airlines</h3>

        <Route exact path = '/flights' component={ FlightsSearch } />
        <Route exact path = '/flights/:id' component={PageToBookFlight} />
        <Route exact path = '/flights/search/:origin' component={FlightPathQuery} />
        </nav>
      </Router>
      </div>
    );//return
  }//render

}//class NavBar

export default NavBar;
