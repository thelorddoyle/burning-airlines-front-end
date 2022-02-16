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
        seatPlan: []
    }

    componentDidMount() { 
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

        let seatPlanArray = [];

        const { rows, columns, reservation } = this.state;
        console.log(reservation)
        for (let i = 1; i < rows+1; i ++){
            // seatPlanArray.push(<div className='row' key={i}></div>);
            // console.log(seatPlanArray)
            for (let j = 1; j < columns+1; j++){

                // reservation.forEach( (r) => {

                    // if (r.column === j && r.row === i){
                //         seatPlanArray.push(<div status='occupied' row={i} column={j}></div>);
                //         // console.log(seatPlanArray)
                //     } else {
                        seatPlanArray.push(<div status='unoccupied' row={i} column={j}></div>);
                //         // console.log('column', j, 'row', i)
                //     }

                // })
            }
        }

        this.setState({seatPlan: seatPlanArray})

    }

    

    render() {

        return (
            <div>
                THIS IS THE FLIGHTS PAGE {this.props.match.params.id}
                {this.state.seatPlan}
            </div>
        );
    }
}

export default PageToBookFlight;

