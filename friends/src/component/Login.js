import React, { Component } from 'react'
import { connect } from 'react-redux';

import { login } from '../action';

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
    this.props.login(this.state.credentials)

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
            <button>Log in</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
    return{
        fetchingFriend: state.fetchingFriend,
        error: state.error
        
    }
}




export default connect(mapStateToProps, { login })(Login);
