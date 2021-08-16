import React, { Component } from 'react';
import { connect } from 'react-redux';
import handleLogin from '../Action/auth';

function mapStateToProps(state) {
  return {};
}

class Login extends Component {
  constructor(props) {
    super(props);
    // this.emailRef = React.createRef();
    // this.pswRef = React.createRef();

    this.state = {
      email: '',
      psw: '',
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // console.log('this.emailRef', this.emailRef);
    // console.log('this.emailRef', this.emailRef.current.value);
    // console.log('this.pswRef', this.pswRef);
    // console.log('this.pswRef', this.pswRef.current.value);
    console.log('Login State', this.state);
  };

  render() {
    return (
      <form className="login-form">
        <span className="login-signup-header">Log In</span>
        <div className="field">
          <input
            type="email"
            placeholder="Email"
            required
            onChange={(e) => this.setState({ email: e.target.value })}
          />
        </div>
        <div className="field">
          <input
            type="password"
            placeholder="Password"
            required
            ref={this.pswRef}
            onChange={(e) => this.setState({ psw: e.target.value })}
          />
        </div>
        <div className="field">
          <button onClick={this.handleSubmit}>Log In</button>
        </div>
      </form>
    );
  }
}

export default connect(mapStateToProps)(Login);
