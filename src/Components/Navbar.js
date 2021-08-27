import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { logout } from '../Action/auth';
import { connect } from 'react-redux';
import { searchAction } from '../Action/search';

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    results: state.search.results,
  };
};

class Navbar extends Component {
  handleLogout = () => {
    this.props.dispatch(logout());
  };
  handleSearch = (e) => {
    // console.log(this.state.searchText);
    // this.props.dispatch(searchAction(this.state.searchText));
    this.props.dispatch(searchAction(e.target.value));
  };

  render() {
    const { auth, results } = this.props;
    const user = auth.user;
    // console.log('Navbar props', this.props);
    return (
      <nav className="nav">
        <div className="left-div">
          <Link to="/">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAATlBMVEX+hIT+TU3+ICC6AADbAABrAAD+OTn+XFxTAAD/iYn/YGBGAAD/Jib/U1NlCQn/PDxJBwfZBga9Bwf/Y2M+AABKAQFBCQn/KytiEBD/WFh9/p+fAAABJElEQVR4nO3c2RGCQAAFwVVRYeUQ8Mw/UWOw6n1o0ZNBJzClxOoubaprv4+VAxISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEv6RsMt1u6d6PPtY5ZBrranWZo6VFNZzqtrkCgoXQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQsLv+1Hhkiv3VIgKx1ivKdd7iFWOscbpFGvYxSIkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJNyi8AMB6Uq4qW2PYQAAAABJRU5ErkJggg=="
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
          <input placeholder="Search" onChange={this.handleSearch} />

          {results.length > 0 && (
            <div className="search-results">
              <ul>
                {results.map((user) => {
                  return (
                    <li className="search-results-row" key={user._id}>
                      <Link to={`/user/${user._id}`}>
                        <img
                          src="https://image.flaticon.com/icons/svg/2154/2154651.svg"
                          alt="user-dp"
                        />
                        <span>{user.name}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </div>
        <div className="right-nav">
          {auth.isLoggedIn && (
            <div className="user">
              <Link to="/settings">
                <img
                  src="https://img-premium.flaticon.com/png/512/3006/premium/3006876.png?token=exp=1630072838~hmac=ff015ca60ab246db6d5600f6fa2eda20"
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
