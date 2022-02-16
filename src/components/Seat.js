import React from 'react'
import axios from 'axios'

class Seat extends React.Component {

    state = {
      reservations: this.props.reservation,
      row: this.props.row,
      column: this.props.column,
      flight_id: this.props.flight.id,
      toShow: true
    }; // end of state

    componentDidMount = (ev) => {
      this.state.reservations.forEach((res) => {
        if (res.column === this.state.column) {
          // console.log('matching column, time to check row')
          if (res.row === this.state.row) {
            // console.log('we have a match!!!')
            this.setState({toShow: false})
          } else {
            // console.log('matched column but no match on row. THANK GOD')
          }
        } else {
          // console.log('no match on column. loop ended.')
        }
      }) 
    }

    handleSubmit = (ev) => {
      ev.preventDefault();
      // console.log('this seat is on row ' + this.props.row + ' and column ' + this.props.column)
      // console.log('submit: ', this.state.secretContent)
      this.postReservation( this.state.row, this.state.column, this.state.flight_id );
    }

    postReservation = async (row, column, flight_id) => {
      console.log('Attempting to post to Reservations...')
      console.log('Row: ', row, 'Column: ', column)

      try {
        const res = await axios.post('http://localhost:3000/reservations', {row: row, column: column, flight_id: flight_id});
        console.log('reservation create response: ', res.data)
        // this is just making a copy of the current secrets array, then adding the new JSON to the end, then updating the old state
        // const newSecrets = this.state.secrets.slice();
        // newSecrets.push(res.data)
        // this.setState({secrets: newSecrets})

        this.setState({
          reservations: [ res.data, ...this.state.reservations ]
        })

      } catch(err) {
        console.log('error creating secret: ', err)
      }

    }

    
    render() {
      
    const condition = this.state.toShow

    return(
      <div>
        {
          condition ? 
          ( <div className='seat'>
              <form onSubmit={this.handleSubmit}>
              <button className='planeButton'></button>
              </form>
            </div>) 
            : 
            (<div className='unavailableSeat'>
            </div>)
        }
      </div>

    )
  }
}

export default Seat;