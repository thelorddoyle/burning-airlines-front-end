import React, { Component } from 'react';

import axios from 'axios'

// const RAILS_FLIGHTS_BASE_URL = 'localhost:3000/flights/'

class PageToBookFlight extends Component {

    state = {
        flight: [],
        rows: [],
        columns: [],
        reservation: [],
        plane: [],
        loading: false,  
        error: null,
    }

    componentDidMount(){ 
        // this.showFlightInfo()
        console.log('mounted')
        this.getReservationInfo(this.props.match.params.id)
    }
    
    getReservationInfo = async (ev) => {
        console.log('res info',ev)
        try {
            const res = await axios.get( `http://localhost:3000/flights/${ev}` );
            // console.log('response', res.data);
            this.setState({
              flight: res.data.flight,
              reservation: res.data.reservation,
              plane: res.data.plane,
              rows: res.data.plane.rows,
              columns: res.data.plane.columns,
              loading: false  
            });
            console.log('checking flight:', this.state.flight);
            console.log('checking reservation:', this.state.reservation);
            console.log('checking rows:', this.state.rows);
            console.log('checking columns:', this.state.columns);
          } catch( err ){
             console.log('Error in search AJAX: ', err);
             this.setState({ error: err, loading: false });
          }
        this.renderSeats()
    }

    renderSeats = () => {
        let counter = 1
        const { rows, columns, reservation } = this.state;
        console.log(reservation)
        for (let i = 1; i < rows+1; i ++){
            // console.log('row', i)
            for (let j = 1; j < columns+1; j++){
                reservation.forEach( (r) => {
                    // console.log(r.column)
                    if (r.column === j && r.row === i){
                        console.log('seat taken at column', j, 'and row', i)
                    } else{
                        console.log('column', j, 'row', i)
                    }
                })
                
            }
            counter+=1
            // console.log(counter)
        }
    }

    render() {
        return (
            <div>
                THIS IS THE FLIGHTS PAGE {this.props.match.params.id}
            </div>
        );
    }
}

export default PageToBookFlight;