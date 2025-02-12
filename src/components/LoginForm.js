import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  handleUserName = event => {
    this.setState({
      username: event.target.value
    })
  }

  handlePassword = event => {
    this.setState({
      password: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
  }



  render() {
    return (
      
      <form onSubmit={event => this.handleSubmit(event)} >
       
        <div>
        
          <label>
            Username
            <input id="username" name="username" type="text" 
            value={this.state.username}
            onChange={event => this.handleUserName(event)} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" 
            value={this.state.password}
            onChange={event => this.handlePassword(event)}/>
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
      
    );
  }
}

export default LoginForm;
