import React from 'react';

class Planes extends React.Component {

    state = {
        flightSelect: '',
    }
    handleInput = (ev) => {
        this.setState({ flightSelect: ev.target.value });
    }

    handleSelection = (ev) => {
        this.props.history.push(`/planes/${(this.state.flightSelect)}`)
    }

    render() {
        return (
            <div>
                <h1>Planes</h1>
                <div className="planes">
                    <p>Info about planes goes here</p>
                    <form onSubmit={ this.handleSelection }>
                    <input type="text" onChange={ this.handleInput } />
                    <button>Select</button>
                    </form>
                    {/* <button onClick={this.handleSelection(1)}>TEST ROUTE</button> */}
                </div>
            </div>
        );
    }
}

export default Planes;