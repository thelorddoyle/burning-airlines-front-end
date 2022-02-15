import React, { Component } from 'react';

class FlightSearch extends Component {

    state = {
        flightInfo: [], // from backend
        loading: false,  
        error: null 
    }

    componentDidMount(){ 
        // this will call showFlightInfo()
        console.log(this.props.match.params.id)
    }

    showFlightInfo(){
        this.setState({ loading: true });
        // this will pull from backend and push into flightInfo
    }


    render() {
        if( this.state.error !== null ){
            return <p>Sorry, there was an error loading your flight information. Please try again.</p>;
          }
        return (
            <div>
                <p>showing results for your flight ({this.props.match.params.id})</p>
                <p>from: </p>
                <p>to: </p>
                <p>plane: </p>
                <p>depart: </p>
                <p>seat select: </p>
                <p>on submit, prompt('something about confirming selection'): </p>


            </div>
        );
    }
}

export default FlightSearch;