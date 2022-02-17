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
import Login from './Login'


class NavBar extends React.Component{

  state = {
    users: [],
    logged_in: false,
    user_id: 0,
  }

  getLoginData = (id) => {
    this.setState({id: id, logged_in: true})
    console.log('got login data', this.logged_in, this.user_id)
  }

  getUserId = (id) => {
    console.log('WE FUCKING GOT IT', id)
    this.setState({logged_in: true})
    this.setState({user_id: id})
  }


  
  render(){

    return(
      <div>
      {
        this.state.logged_in
        ?
      <Router>
        <h2>BURNING AIRLINES</h2>
        <nav>

        <Link to="/my-account">My Account</Link> |&nbsp;
        <Link to="/flights">Flight Search</Link> |&nbsp;
        <Link to="/flights/create">Flight Create</Link> |&nbsp;
        <Link to="/airplanes/create">Plane Create</Link>

        <h3>GA Airlines</h3>


        <Route exact path = '/my-account' component={Home} />
        <Route exact path = '/flights' component={ FlightsSearch } />
        <Route exact path = '/flights/:id' component={PageToBookFlight} />
        <Route exact path = '/flights/search/:origin/:destination' component={FlightPathQuery} />
        
        <Route exact path ='/flights/create' component={CreateFlight}></Route>
        <Route exact path ='/airplanes/create' component={CreatePlane}></Route>
        
        </nav>
      </Router>
        :
        <div className='login' >
          <Login submitUserId={this.getUserId} />
        </div>
      }
      </div>
    );//return
  }//render

}//class NavBar

export default NavBar;
