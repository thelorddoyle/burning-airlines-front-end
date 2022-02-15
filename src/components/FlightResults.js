<<<<<<< HEAD
import React from 'react';

class FlightSearch extends React.Component {

    state = {
        flightSelect: '', // this should be an array which we're pushing flight info into. 
    }

    handleInput = (ev) => {
        this.setState({ flightSelect: ev.target.value }); // sets state
    }

    handleSelection = (ev) => {
        this.props.history.push(`/flights/${(this.state.flightSelect)}`) // adds to history (url) <-- shuold be this.state.flightSelect.something to get to the flight id

        // TODO: Build it so 

    }

    render() {
        return (
            <div>
                <h1>Flights</h1>
                <div className="flights">
                    <p>Info about flights goes here:</p>
                    imagine this is a flight select area. just testing prop passing
                    <form onSubmit={ this.handleSelection }>
                    <input type="text" onChange={ this.handleInput } /> 
                    {/* maybe the flight info goes here since we're clicking on an 
                    existing planned flight. we could probably just send this to flight 
                    search and not have to query the db there. */}
                    </form>
                </div>
=======
import React, { Component } from 'react';

class FlightResults extends Component {

    state = {
        flightInfo: [], // from backend. 
        loading: false,  
        error: null 
    }

    componentDidMount(){ 
        // this will call showFlightInfo() with: 
        // this.showFlightInfo(this.props.match.params.id) 
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
>>>>>>> c4841826d613c2ff3a7f342b79c67cc061d77d0b
            </div>
        );
    }
}

<<<<<<< HEAD
export default FlightSearch;
=======
export default FlightResults;
>>>>>>> c4841826d613c2ff3a7f342b79c67cc061d77d0b
