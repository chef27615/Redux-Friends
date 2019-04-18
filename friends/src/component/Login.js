import React, { Component } from 'react'

class Login extends Component {

    state = {
        credentials : {
            username: '',
            password: ''
        }
    };

handleChange = e => {
    this.setState({
        credentials: {
            ...this.state.credentials,
            [e.target.name]: e.target.value
        }
    });
}

submitLogin = e => {
    e.preventDefault();
    console.log('fired')
}

  render() {
      console.log(this.props)
    return (
      <div>
        <form onSubmit={this.submitLogin}>
            <input 
                type='text'
                name='username'
                value={this.state.credentials.username}
                placeholder='username'
                onChange={this.handleChange}
            />

            <input 
                type='text'
                name='password'
                value={this.state.credentials.password}
                placeholder='password'
                onChange={this.handleChange}
            />
        </form>
      </div>
    )
  }
}

export default Login
