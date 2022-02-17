import React from 'react';
import { Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import FlightResults from './FlightResults'
import PlaneResults from './PlaneResults'
// import {} from './FlightResults'

class Home extends React.Component {

    

    render() {
        return (
            <div>
                <h1>My Account</h1>
                <div className="homepage">

                    <div className="all-flights">
                        <FlightResults />
                    </div>

                    <div className="all-planes">
                        <PlaneResults />
                    </div>

            </div>
            </div>
        );
    }
}

export default Home;