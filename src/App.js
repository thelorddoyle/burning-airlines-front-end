import './App.css';
import Flights from './components/Flights'
import Planes from './components/Planes'


import Home from './components/Home'
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
      <Route exact path = '/flights' component={ Flights } />
      <Route exact path = '/flights/:id' components={Flights} />
      <Route exact path = '/planes' component={ Planes } />
      {/* <Route exact path = '/planes/:id' component={ Planes } /> */}
      </nav>
      </Router>
      
    </div>
  );
}

export default App;
