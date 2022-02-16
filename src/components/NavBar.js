import React from 'react';
import '../App.css';
import {HashRouter as Router, Route, Link} from 'react-router-dom'
import FlightsSearch from './FlightsSearch'
import FlightResults from './FlightResults'

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
        <Route exact path = '/flights/:id' component={FlightResults} />
        </nav>
      </Router>
      </div>
    );//return
  }//render

}//class NavBar

export default NavBar;
