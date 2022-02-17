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
import axios from 'axios'


class NavBar extends React.Component{

  state = {
    users: [],
    logged_in: false,
    user_id: 0,
    allUsers: [],
    isAdmin: false
  }

  getLoginData = (id) => {
    this.setState({id: id, logged_in: true})
    console.log('got login data', this.logged_in, this.user_id)
  }

  getUserId = (id) => {
    console.log('WE FUCKING GOT IT', id)
    this.setState({logged_in: true})
    this.setState({user_id: id.toString()})
    this.fetchUserInfo()
  }

  fetchUserInfo = async () => {
    try {
      const res = await axios.get('http://localhost:3000/users');
      console.log('users create response: ', res.data)
      this.setState({allUsers: res.data})
      console.log(this.state.allUsers)
    } catch(err) {
      console.log('users creating secret: ', err)
    }
    this.checkForAdmin()
  }

  checkForAdmin = () =>{
    this.state.allUsers.forEach((e)=>{
      if (e.id == this.state.user_id && e.is_admin === true){
        console.log('USER', e, 'is ADMIN')
        this.setState({isAdmin:true})
        return;
      } else {
        // console.log('condition not fulfilled')
      }
    })
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
        
        
        {this.state.isAdmin
        ?  
        <div className="admin stuff">
          <Link to="/my-account">My Account</Link> |&nbsp;
        <Link to="/flights">Flight Search</Link> |&nbsp;
        <Link to="/flights/create">Flight Create</Link> |&nbsp;
        <Link to="/airplanes/create">Plane Create</Link>
        <Route exact path = '/flights' component={ FlightsSearch } />
        <Route exact path = '/my-account' component={Home} />
        <Route exact path = '/flights/:id' component={PageToBookFlight} />
        <Route exact path = '/flights/search/:origin/:destination' component={FlightPathQuery} />
        <Route exact path ='/flights/create' component={CreateFlight}></Route>
        <Route exact path ='/airplanes/create' component={CreatePlane}></Route>
        </div>
        : 
        <div className="not admin stuff">

        <Link to="/my-account">My Account</Link> |&nbsp;
        <Link to="/flights">Flight Search</Link> |&nbsp;

        <Route exact path = '/flights' component={ FlightsSearch } />
        <Route exact path = '/my-account' component={Home} />
        <Route exact path = '/flights/:id' component={PageToBookFlight} />
        <Route exact path = '/flights/search/:origin/:destination' component={FlightPathQuery} />
        </div>
        
        }
        

        <h3>GA Airlines</h3>

        {/* <Route exact path = '/users' component={} /> */}
        
        
       
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
