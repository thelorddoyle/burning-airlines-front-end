import React, { Component } from 'react';
import axios from 'axios'
import Seat from './Seat'

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
        for (let i = 1; i < rows+1; i ++){
            // seatPlanArray.push(<div className='row' key={i}></div>);
            // console.log(seatPlanArray)
            for (let j = 1; j < columns+1; j++){

                seatPlanArray.push(<Seat row={i} column={j} plane={this.state.plane} flight={this.state.flight} reservation={this.state.reservation} />);

            }
        }

        this.setState({seatPlan: seatPlanArray})

    }

    render() {

        return (
            <div>
                THIS IS THE FLIGHTS PAGE {this.props.match.params.id}
                <div className='grid'>
                    {this.state.seatPlan}
                </div>
            </div>
        );
    }
}

export default PageToBookFlight;

