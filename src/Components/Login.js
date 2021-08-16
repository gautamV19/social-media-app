import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login, startLogin } from '../Action/auth';

function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
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
    const { error, isLoggedIn, isProgress } = this.props.auth;
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.dispatch(startLogin());
    // console.log('this.emailRef', this.emailRef);
    // console.log('this.emailRef', this.emailRef.current.value);
    // console.log('this.pswRef', this.pswRef);
    // console.log('this.pswRef', this.pswRef.current.value);
    console.log('Login State', this.state);

    const { email, psw } = this.state;

    if (email && psw) {
      this.props.dispatch(login(email, psw));
    }
  };

  render() {
    const { error, isProgress } = this.props.auth;
    console.log(isProgress);
    return (
      <form className="login-form">
        <span className="login-signup-header">Log In</span>
        {error && <div className="alert error-dailog">{error}</div>}
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
          {isProgress ? (
            <button
              onClick={this.handleSubmit}
              disabled={isProgress}
              style={{ backgroundColor: 'green' }}
            >
              Logging In...
            </button>
          ) : (
            <button onClick={this.handleSubmit} disabled={isProgress}>
              Log In
            </button>
          )}
        </div>
      </form>
    );
  }
}

export default connect(mapStateToProps)(Login);
