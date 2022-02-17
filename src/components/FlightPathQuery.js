import React, { Component } from 'react';
import FlightsSearch from './FlightsSearch';
import axios from 'axios'
import { Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const RAILS_FLIGHTS_BASE_URL ='http://localhost:3000/'

class FlightPathQuery extends Component {

    state = {
        flights: [],
        flightInfo: [], // from backend. 
        loading: false,  
        error: null,
        selectedFlight: []
    }

    componentDidMount(){ 
    
        console.log('WE HAVE MOUNTED THE ORIGIN', this.props.match.params.origin);
        this.getFlightsFromOrigin(this.props.match.params.origin)
    
    }

    getFlightsFromOrigin = async (ev) => {
        this.setState({ loading: true });
        // this will pull from backend and push into this.state.flightInfo array
        
        try {
            const res = await axios.get(`http://localhost:3000/flights/search/${ev}` );
            console.log('response', res.data);
            this.setState({
              flights: res.data,
              loading: false  
            });
            console.log('THIS SHOULD BE checking state:', this.state.flights.origin);

          } catch( err ){
             console.log('Error in search AJAX: ', err);
             this.setState({ error: err, loading: false });
          }
          
    }

    handleSelection = (ev) => {
        console.log(ev)
        this.props.history.push(`/flights/${(ev)}`) 
    }


    render() {

        const { loading, error, flights} = this.state;
        console.log('LOOK HERE', flights)
        const allFlights = flights.origin
        console.log('PLEASE LOOK HERE AGAIN', allFlights)

        const flightList = allFlights?.map((f) => 
        // console.log('fffff',f))

        <li key={f.id}>
        airplane_id: {f.id} <br />
        destination: {f.destination} <br />
        origin: {f.origin} <br />
        seats: {f.seats} <br />
            <form onSubmit={ () => {
                this.handleSelection(f.id)
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
            <h1>Flights from {this.props.match.params.origin}</h1>
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

export default FlightPathQuery;