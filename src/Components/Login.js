import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {};
}

class Login extends Component {
  constructor(props) {
    super(props);
    this.emailRef = React.createRef();
    this.pswRef = React.createRef();
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('this.emailRef', this.emailRef);
    console.log('this.emailRef', this.emailRef.current.value);
    console.log('this.pswRef', this.pswRef);
    console.log('this.pswRef', this.pswRef.current.value);
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
            ref={this.emailRef}
          />
        </div>
        <div className="field">
          <input
            type="password"
            placeholder="Password"
            required
            ref={this.pswRef}
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
