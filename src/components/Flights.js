import React from 'react';

class Flights extends React.Component {

    state = {
        flightSelect: '',
    }
    handleInput = (ev) => {
        this.setState({ flightSelect: ev.target.value }); // sets state
    }

    handleSelection = (ev) => {
        this.props.history.push(`/flights/${(this.state.flightSelect)}`) // adds to history (url)
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
                    </form>
                </div>
            </div>
        );
    }
}

export default Flights;