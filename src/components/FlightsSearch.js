import React from 'react';
import FlightResults from './FlightResults'

class FlightsSearch extends React.Component {

    state = {
        flightSelect: [], // this should be an array which we're pushing flight info into.
        originQuery: '',
        loading: true,
        error: false 
    }

    handleInput = (ev) => {
        this.setState({ originQuery: ev.target.value }); // sets state

    }

    handleSearch = (ev) => {
        ev.preventDefault()
        console.log('search handled:', this.state.originQuery)
        this.props.history.push(`/flights/search/${this.state.originQuery}`)
    }

    handleSelection = (ev) => {
        console.log(ev)
        this.props.history.push(`/flights/${(ev.id)}`) 
        // ev here is the ID sent from getData handleSelection call
        
        // TODO: Search in the DB where origin only shows
        // Flight.all.where origin: 'Perth'

        // adds to history (url) <-- shuold be this.state.flightSelect.something to get to the flight id.
    }

    getData = (ev, allFlights) => {
        console.log('got: ', ev)
        // console.log(allFlights)
        this.setState({flightSelect: ev}, () => {this.handleSelection(this.state.flightSelect)})
    }

    render() {
        return (
            <div>
                <h1>Flights</h1>

                <div className="flights">
                    <p>Info about flights goes here:</p>
                    imagine this is a flight select area. just testing prop passing
                    <form onSubmit={ this.handleSearch }>
                    <input type="text" onChange={ this.handleInput } /> 
                    {/* maybe the flight info goes here since we're clicking on an 
                    existing planned flight. we could probably just send this to flight 
                    search and not have to query the db there. */}
                    </form>
                    <br />
                    <FlightResults sendData={this.getData} />
                </div>

            </div>
        );
    }
}

export default FlightsSearch;