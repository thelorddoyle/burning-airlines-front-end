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
        seatPlan: [],
        seatPlanGrid: []
    }

    componentDidMount() { 
        // this.showFlightInfo()
        console.log('mounted')
        this.getReservationInfo(this.props.match.params.id)
        console.log(this.props.match.originQuery)
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
            // console.log('checking flight:', this.state.flight);
            // console.log('checking reservation:', this.state.reservation);
            // console.log('checking rows:', this.state.rows);
            // console.log('checking columns:', this.state.columns);
          } catch( err ){
             console.log('Error in search AJAX: ', err);
             this.setState({ error: err, loading: false });
          }
        this.renderSeats()
        console.log('flight', this.state.flight)
        console.log('plane', this.state.plane)
    }

    renderSeats = () => {

        let seatPlanArray = [];

        const { rows, columns, reservation } = this.state;
        for (let i = 1; i < rows+1; i ++){
            // seatPlanArray.push(<div className='row' key={i}></div>);
            // console.log(seatPlanArray)
            for (let j = 1; j < columns+1; j++){

                seatPlanArray.push(<Seat key={`seat ${i-1}${j}`} row={i} column={j} plane={this.state.plane} flight={this.state.flight} reservation={this.state.reservation} />);

            }
        }

        this.setState({seatPlan: seatPlanArray})
        this.renderSeatGrid()
        console.log(this.state.plane)

    }

    renderSeatGrid = () => {

        let seatPlanGrid = [];

        const { columns, flight, plane } = this.state
        console.log('rendering seat grid for: flight #', flight.id)
        console.log('this flight is on the plane: ', this.state.plane.name)
        // console.log('this plane has this many seats: ', this.flight.seats)
        console.log('this flight should have rows:', this.state.rows);
        console.log('this flight should have columns:', this.state.columns);

        if (columns === 2) {
            seatPlanGrid.push(
                <div className='seatplan grid2' key={flight.id} >
                    {this.state.seatPlan} 
                    <div className="wing2-left"></div><div className="wing2-right"></div>
                </div>
            )
        } else if (columns === 4) {
            seatPlanGrid.push(
                <div className='seatplan grid4' key={flight.id} >
                    {this.state.seatPlan}
                    <div className="wing4-left"></div><div className="wing4-right"></div>

                </div> 
            )
        } else if (columns === 6) {
            seatPlanGrid.push(
                <div className='seatplan grid6' key={flight.id} >
                    {this.state.seatPlan}
                    <div className="wing6-left"></div><div className="wing6-right"></div>
                </div>
            )
        }

        this.setState({seatPlanGrid: seatPlanGrid})
        console.log(this.state.seatPlanGrid)

    }

    render() {

        return (
            <div>
                THIS IS THE FLIGHTS PAGE {this.props.match.params.id}
                {this.state.seatPlanGrid}
            </div>
        );
    }
}

export default PageToBookFlight;