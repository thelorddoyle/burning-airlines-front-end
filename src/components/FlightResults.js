import React, { Component } from 'react';
import'../App.css'
import FlightsSearch from './FlightsSearch'
import { Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import axios from 'axios'

const RAILS_FLIGHTS_BASE_URL ='http://localhost:3000/flights'

class FlightResults extends Component {

    state = {
        flights: [],
        flightInfo: [], // from backend. 
        loading: false,  
        error: null,
        selectedFlight: []
    }

    componentDidMount(){ 
        // this will call showFlightInfo() with: 
        // this.showFlightInfo(this.props.match.params.id)
        // console.log(this.props.match)
        
        this.showFlightInfo()
        // TODO: This is basically where we need to stop ALL flights showing (if we want to do that) and organise it so that the search function actually queries the DB with the origin of the flight.
        // TODO: 
        
    }

    showFlightInfo = async () => {
        this.setState({ loading: true });
        // this will pull from backend and push into this.state.flightInfo array
        
        try {
            const res = await axios.get( RAILS_FLIGHTS_BASE_URL );
            // console.log('response', res.data);
            this.setState({
              flights: res.data,
              loading: false  
            });
            // console.log('checking state:', this.state.flights);
          } catch( err ){
             console.log('Error in search AJAX: ', err);
             this.setState({ error: err, loading: false });
          }
          
    }

    goToFlight = (flight) => {
        this.setState({selectedFlight: flight}, () => { this.props.sendData(this.state.selectedFlight, this.state.flights) })
    }

    render() {

        const { loading, error, flights} = this.state;

        const flightList = flights.map((f) => 
        <li key={f.id}>
        airplane_id: {f.id} <br />
        destination: {f.destination} <br />
        origin: {f.origin} <br />
        seats: {f.seats} <br />
        date: {f.date} <br/>
            <form onSubmit={ () => {
                this.goToFlight(f)
            } } >
        <Button type="submit">View Flight</Button>
            </form>
        <br /><br />
        </li>)

        if( this.state.error !== null ){
            return <p>Sorry, there was an error loading your flight information. Please try again.</p>;
          }
        return (
            <div>
            <h1>All Flights</h1>
            <ul>
                {
                this.state.loading
                ?
                <p>Loading results...</p>
                :
                <div className="bookFlight">
                    
                {flightList}
            
                </div>
                }
            </ul>
            </div>
        );
    }
}

export default FlightResults;