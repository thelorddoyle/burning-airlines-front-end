import React, { Component } from 'react';
import axios from 'axios'

class CreatePlane extends Component {

    state = {
        name: 'Unnamed',
        rows: 8,
        columns: 2,
    }

    componentDidMount = (ev) => {
   
      }

    nameStateSet = (ev) => {
        this.setState({name:ev.target.value})
        console.log('NAME CHANGE', ev.target.value)
    }
    rowsStateSet = (ev) => {
        this.setState({rows:ev.target.value})
        console.log('rows CHANGE', ev.target.value)
    }
    columnsStateSet = (ev) => {
        this.setState({columns:ev.target.value})
        console.log('columns CHANGE', ev.target.value)
    }


    handleSubmit = (ev) => {
        console.log(ev)
        ev.preventDefault();
        // console.log('this seat is on row ' + this.props.row + ' and column ' + this.props.column)
        // console.log('submit: ', this.state.secretContent)
        this.postPlaneInfo( this.state.name, this.state.rows, this.state.columns );
        this.props.history.push('/')
    }

    

    postPlaneInfo = async (name, rows, columns) => {
        console.log('Attempting to post to Plane...')
        console.log('Row: ', rows, 'Column: ', columns, 'Name:', name)
  
        try {
          const res = await axios.post('http://localhost:3000/airplanes', {name: name, rows: rows, columns: columns});
          console.log('airplane create response: ', res.data)
  
        } catch(err) {
          console.log('error creating secret: ', err)
        }
  
      }
  
      
    render() {
    

    return(
    <div>
        <form onSubmit={this.handleSubmit}>
            <input type="text" label="name" placeholder="name" onChange={this.nameStateSet}></input>
            <input type="text" label="rows" placeholder="rows" onChange={this.rowsStateSet}></input>
            <input type="text" label="columns" placeholder="columns" onChange={this.columnsStateSet}></input>
            <button type="submit">Create plane</button>
        </form>
    </div>

    )
}
}

export default CreatePlane;

    

    
