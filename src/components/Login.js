import React, { Component } from 'react';

class Login extends Component {

  state = {
    user_id: null,
  }

  handleInput = (ev) => {
    this.setState({user_id: ev.target.value});
  }

  handleSubmit = (ev) => {
    ev.preventDefault();
    this.props.submitUserId(this.state.user_id)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input placeholder='USER ID' type="text" onChange={this.handleInput} />
          <button>Login</button>
        </form>
      </div>
    );
  }
}

export default Login;