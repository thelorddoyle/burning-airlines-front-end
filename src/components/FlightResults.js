import React, { Component } from 'react';

import axios from 'axios'

class FlightResults extends Component {

    state = {
        flightInfo: [], // from backend. 
        loading: false,  
        error: null 
    }

    componentDidMount(){ 
        // this will call showFlightInfo() with: 
        // this.showFlightInfo(this.props.match.params.id) 

        try {
            axios.get( 'http://localhost:3000/flights');
            console.log('response', res.data);
            this.setState({
              flightInfo: res.data. ,
              loading: false  
            });
          } catch( err ){
             console.log('Error in search AJAX: ', err);
             this.setState({ error: err, loading: false });
          }
    }

    showFlightInfo(flightNo){
        this.setState({ loading: true }); 
        // this will pull from backend and push into this.state.flightInfo array

        // try {
        //     const res = await axios.get( backend );
        //     console.log('response', res.data);
        //     this.setState({
        //       flightInfo: res.data. ,
        //       loading: false  
        //     });
        //   } catch( err ){
        //      console.log('Error in search AJAX: ', err);
        //      this.setState({ error: err, loading: false });
        //   }

    }


    render() {
        if( this.state.error !== null ){
            return <p>Sorry, there was an error loading your flight information. Please try again.</p>;
          }
        return (
            <div>
                {
                this.state.loading
                ?
                <p>Loading results...</p>
                :
                <div className="bookFlight">
                <p>showing results for selected flight ({this.props.match.params.id})</p>
                <p>from: something like this.flightInfo.origin </p>
                <p>to: something like this.flightInfo.destination</p>
                <p>plane: something like this.flightInfo.plane.name, (this.flightInfo.plane.id)?</p>
                <p>depart time/date: ?</p>
                <p>seat select: this will set params for our reservation which will be passed back to the backend</p>
                <p>on submit, prompt('something about confirming selection'): </p>
                <p>Redirect home?</p>
                </div>
                }
            </div>
        );
    }
}

export default FlightResults;
