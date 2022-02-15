import React from 'react';

class Planes extends React.Component {

    state = {
        planeSelect: '',
    }
    handleInput = (ev) => {
        this.setState({ planeSelect: ev.target.value });
    }

    handleSelection = (ev) => {
        this.props.history.push(`/planes/${(this.state.planeSelect)}`)
    }

    render() {
        return (
            <div>
                <h1>Planes</h1>
                <div className="planes">
                    <p>Info about planes goes here</p>
                    <form onSubmit={ this.handleSelection }>
                    <input type="text" onChange={ this.handleInput } />
                    </form>
                    {/* <button onClick={this.handleSelection(1)}>TEST ROUTE</button> */}
                </div>
            </div>
        );
    }
}

export default Planes;