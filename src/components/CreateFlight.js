import React, { Component } from 'react';
import axios from 'axios'

class CreateFlight extends Component {

    state = {
        airplane: 'Unnamed',
        origin:'undefined',
        destination: 'undefined',
        date: 'undefined'
    }

    componentDidMount = (ev) => {
   
    }

    airplaneStateSet = (ev) => {
        this.setState({airplane:ev.target.value})
        console.log('airplane CHANGE', ev.target.value)
    }
    originStateSet = (ev) => {
        this.setState({origin:ev.target.value})
        console.log('origin CHANGE', ev.target.value)
    }
    destinationStateSet = (ev) => {
        this.setState({destination:ev.target.value})
        console.log('destination CHANGE', ev.target.value)
    }
    dateStateSet = (ev) => {
        this.setState({date:ev.target.value})
        console.log('date CHANGE', ev.target.value)
    }


    handleSubmit = (ev) => {
        console.log(ev)
        ev.preventDefault();
        // console.log('this seat is on row ' + this.props.row + ' and column ' + this.props.column)
        // console.log('submit: ', this.state.secretContent)
        this.postPlaneInfo( this.state.airplane, this.state.origin, this.state.destination,this.state.date );
        this.props.history.push('/')
    }

    

    postPlaneInfo = async (airplane, origin, destination, date) => {
        console.log('Attempting to post to Plane...')
        console.log('airplane: ', airplane, 'origin: ', origin, 'date:', date, 'destination', destination)
  
        try {
          const res = await axios.post('http://localhost:3000/flights', {airplane_id: airplane, origin: origin, destination: destination, date: date});
          console.log('flight create response: ', res.data)
        } catch(err) {
          console.log('error creating secret: ', err)
        }
  
      }
  
      
    render() {
    

    return(
    <div>
        <form onSubmit={this.handleSubmit}>
            <input type="text" label="airplane id" placeholder="airplane id" onChange={this.airplaneStateSet}></input>
            <input type="text" label="origin" placeholder="origin" onChange={this.originStateSet}></input>
            <input type="text" label="destination" placeholder="destination" onChange={this.destinationStateSet}></input>
            <input type="text" label="date" placeholder="date YYYY/MM/DD" onChange={this.dateStateSet}></input>
            <button type="submit">Create plane</button>
        </form>
    </div>

    )
}
}

export default CreateFlight;

    

    
