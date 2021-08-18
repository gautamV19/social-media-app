import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { signingup, signup, handleResetAuth } from '../Action/auth';

const mapStateToProps = (state) => {
  return {
    signup: state.auth,
  };
};

export class Signup extends Component {
  constructor(props) {
    super(props);
    // console.log('Inside signup constructor', props);
    this.state = {
      name: '',
      email: '',
      password: '',
      confirm_password: '',
    };
  }
  /*
   email,
        password,
        confirm_password: confirmPassword,
        name,
  */

  handleSubmit = (e) => {
    const data = this.state;

    e.preventDefault();
    if (data.password !== data.confirm_password) {
      alert('Please enter the same password');
      return;
    }

    if (data.name && data.email && data.password && data.confirm_password) {
      this.props.dispatch(signingup());
      this.props.dispatch(signup(data));
    }
  };

  componentWillUnmount() {
    this.props.dispatch(handleResetAuth());
  }

  render() {
    // console.log('Props of signup', this.props);
    const { error, isProgress, isLoggedIn } = this.props.signup;
    if (isLoggedIn) {
      return <Redirect to="/"></Redirect>;
    }
    return (
      <form className="login-form" onSubmit={this.handleSubmit}>
        <span className="login-signup-header">Sign Up</span>
        {error && <div className="alert error-dailog">{error}</div>}
        <div className="field">
          <input
            type="text"
            placeholder="Enter your name"
            required
            onChange={(e) => this.setState({ name: e.target.value })}
          />
        </div>
        <div className="field">
          <input
            type="email"
            placeholder="Email"
            required
            onChange={(e) => this.setState({ email: e.target.value })}
          ></input>
        </div>
        <div className="field">
          <input
            type="password"
            placeholder="Enter Password"
            required
            onChange={(e) => this.setState({ password: e.target.value })}
          />
        </div>
        <div className="field">
          <input
            type="password"
            placeholder="Confirm Password"
            required
            onChange={(e) =>
              this.setState({ confirm_password: e.target.value })
            }
          />
        </div>
        {isProgress ? (
          <div className="field">
            <button disabled={isProgress} style={{ backgroundColor: 'green' }}>
              Signing Up...
            </button>
          </div>
        ) : (
          <div className="field">
            <button disabled={isProgress}>Sign Up</button>
          </div>
        )}
      </form>
    );
  }
}

export default connect(mapStateToProps)(Signup);

//** Required Feilds */
/*
email - String
name - String
password - String
confirm_password - String
*/
