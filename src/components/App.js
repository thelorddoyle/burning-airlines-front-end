<<<<<<< HEAD:src/components/App.js
import './App.css';
import FlightSearch from './components/FlightSearch'
import Planes from './components/Planes'
import FlightResults from './components/FlightResults'

import Home from './components/Home'
=======
import '../App.css';
import FlightSearch from './FlightSearch'
import Planes from './Planes'
import FlightResults from './FlightResults'

import Home from './Home'
>>>>>>> c4841826d613c2ff3a7f342b79c67cc061d77d0b:src/App.js
import {HashRouter as Router, Route, Link} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>

      <h2>BURNING AIRLINES</h2>

      <nav>

      <Link to="/">Home</Link> |&nbsp;
      <Link to="/flights">Flights</Link> |&nbsp;
      <Link to="/planes">Planes</Link>

      <h3>GA Airlines</h3>

      <Route exact path = '/' component={ Home } />
      <Route exact path = '/flights' component={ FlightSearch } />
      <Route exact path = '/flights/:id' component={FlightResults} />
      <Route exact path = '/planes' component={ Planes } />
      {/* <Route exact path = '/planes/:id' component={ Planes } /> */}
      </nav>
      </Router>
      
    </div>
  );
}

export default App;