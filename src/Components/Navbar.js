import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { logout } from '../Action/auth';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

class Navbar extends Component {
  handleLogout = () => {
    this.props.dispatch(logout());
  };
  render() {
    const { auth } = this.props;
    const user = auth.user;
    console.log('Navbar props', this.props);
    return (
      <nav className="nav">
        <div className="left-div">
          <Link to="/">
            <img
              src="https://image.flaticon.com/icons/png/512/1409/1409945.png"
              alt="logo"
              style={{ height: '15%', width: '15%' }}
            />
          </Link>
        </div>
        <div className="search-container">
          <img
            className="search-icon"
            src="https://image.flaticon.com/icons/svg/483/483356.svg"
            alt="search-icon"
          />
          <input placeholder="Search" />

          <div className="search-results">
            <ul>
              <li className="search-results-row">
                <img
                  src="https://image.flaticon.com/icons/svg/2154/2154651.svg"
                  alt="user-dp"
                />
                <span>John Doe</span>
              </li>
              <li className="search-results-row">
                <img
                  src="https://image.flaticon.com/icons/svg/2154/2154651.svg"
                  alt="user-dp"
                />
                <span>John Doe</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="right-nav">
          {auth.isLoggedIn && (
            <div className="user">
              <Link to="/settings">
                <img
                  src="https://image.flaticon.com/icons/svg/2154/2154651.svg"
                  alt="user-dp"
                  id="user-dp"
                />
              </Link>
              <span>{user.name}</span>
            </div>
          )}
          <div className="nav-links">
            <ul>
              {!auth.isLoggedIn && (
                <li>
                  <Link to="/login">Log in</Link>
                </li>
              )}
              {auth.isLoggedIn && <li onClick={this.handleLogout}>Log out</li>}
              {!auth.isLoggedIn && (
                <li>
                  <Link to="/signup">Register</Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default connect(mapStateToProps)(Navbar);
