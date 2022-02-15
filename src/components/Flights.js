import React from 'react';

class Flights extends React.Component {

    state = {
        flightSelect: '', // this should be an array which we're pushing flight info into. 
    }

    handleInput = (ev) => {
        this.setState({ flightSelect: ev.target.value }); // sets state
    }

    handleSelection = (ev) => {
        this.props.history.push(`/flights/${(this.state.flightSelect)}`) // adds to history (url) <-- shuold be this.state.flightSelect.something to get to the flight id
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
            </div>
        );
    }
}

export default Flights;