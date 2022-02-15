import '../App.css';
import FlightsSearch from './FlightsSearch'
import Planes from './Planes'
import FlightResults from './FlightResults'

import Home from './Home'
import {HashRouter as Router, Route, Link} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>

      <h2>BURNING AIRLINES</h2>

      <nav>

      <Link to="/">My Account</Link> |&nbsp;
      <Link to="/flights">Flight Search</Link>

      <h3>GA Airlines</h3>

      <Route exact path = '/' component={ Home } />
      <Route exact path = '/flights' component={ FlightsSearch } />
      <Route exact path = '/flights/:id' component={FlightResults} />
      </nav>
      </Router>
      
    </div>
  );
}

export default App;