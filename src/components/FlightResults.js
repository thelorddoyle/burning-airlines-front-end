import React, { Component } from 'react';
import'../App.css'
import FlightsSearch from './FlightsSearch'


import axios from 'axios'

const RAILS_SECRETS_BASE_URL ='http://localhost:3000/flights'


class FlightResults extends Component {

    state = {
        flights: [],
        flightInfo: [], // from backend. 
        loading: false,  
        error: null 
    }

    componentDidMount(){ 
        // this will call showFlightInfo() with: 
        // this.showFlightInfo(this.props.match.params.id)
        this.showFlightInfo() 
        
    }

    showFlightInfo = async (flightNo) => {
        this.setState({ loading: true }); 
        // this will pull from backend and push into this.state.flightInfo array

        try {
            const res = await axios.get( RAILS_SECRETS_BASE_URL );
            // console.log('response', res.data);
            this.setState({
              flights: res.data,
              loading: false  
            });
            console.log('checking state:', this.state.flights);
          } catch( err ){
             console.log('Error in search AJAX: ', err);
             this.setState({ error: err, loading: false });
          }

    }

    // flightIndex = (f) =>{
    //     f.forEach(flight => {
    //         render(){
    //             // <p>{flight.id}</p>
    //         }
    //         console.log('hello');
            
            
    //     });
    // }

    render() {

        const { loading, error, flights} = this.state;

        const flightList = flights.map((f) => 
        <li key={f.id}>
        airplane_id: {f.id}
        destination: {f.destination}
        origin: {f.origin}
        seats: {f.seats}
        </li>)

        if( this.state.error !== null ){
            return <p>Sorry, there was an error loading your flight information. Please try again.</p>;
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

export default FlightResults;



