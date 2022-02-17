import React, { Component } from 'react';
import FlightsSearch from './FlightsSearch';
import axios from 'axios'
import { Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const RAILS_FLIGHTS_BASE_URL ='http://localhost:3000/'

class FlightPathQuery extends Component {

    state = {
        flights: [],
        filteredFlights: [],
        flightInfo: [], // from backend. 
        loading: false,  
        error: null,
        selectedFlight: [],
        destinationQuery: ''
    }

    componentDidMount(){ 
        // console.log('WE HAVE MOUNTED THE ORIGIN', this.props.match.params.origin);
        this.getFlightsFromOrigin(this.props.match.params.origin, this.props.match.params.destination)
    
    }

    getFlightsFromOrigin = async (origin, destination) => {
        this.setState({ loading: true });
        // this will pull from backend and push into this.state.flightInfo array
        
        try {
            const res = await axios.get(`http://localhost:3000/flights/search/${origin}/${destination}` );
            console.log('response', res.data);
            this.setState({
              flights: res.data,
              loading: false  
            });
            // console.log('THIS SHOULD BE checking state:', this.state.flights.origin);

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
        // console.log('LOOK HERE', flights)
        let flightsArr = []
        let filteredFlights = []
        const allFlights = flights.origin
        flightsArr.push(flights.origin)
        // console.log('PLEASE LOOK HERE AGAIN', allFlights)

        const flightList = allFlights?.map((f) => 

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

        const handleInput = (ev) => {
            filteredFlights = []
            console.log(this.state.flights)
            allFlights.forEach( e => {
                if (e.destination.includes(ev.target.value)){
                    filteredFlights.push(e)
                    console.log(filteredFlights)
                    this.setState({filteredFlights: filteredFlights})
                }
                console.log(this.state.filteredFlights)
                // flightList()
            })
            // this.setState({ destinationQuery: ev.target.value }); // sets state
            // if (flights.destination.includes(ev.target.value)){
            //     console.log(flights.destination)
            // }
        }

        return (
            <div>
               
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