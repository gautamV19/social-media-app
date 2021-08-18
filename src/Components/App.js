import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import jwtDecode from 'jwt-decode';

import { fetchPosts } from '../Action/posts';
import { Home, Navbar, Page404, Login, Signup } from './';
import { authUser } from '../Action/auth';

const Settings = () => {
  return <h1>SETTINGS</h1>;
};

const PrivateRoute = (privateProps) => {
  const { isLoggedIn, path, component } = privateProps;

  if (isLoggedIn) {
    return <Route exact path={path} component={component} />;
  } else {
    return <Redirect to="/login" />;
  }
};

class App extends Component {
  componentDidMount() {
    this.props.dispatch(fetchPosts());

    const token = localStorage.getItem('token');

    if (token) {
      const user = jwtDecode(token);
      console.log('My User', user);
      this.props.dispatch(authUser(user));
    }
  }

  render() {
    const { posts } = this.props;
    console.log('Props', this.props);

    return (
      <Router>
        <Navbar />
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => {
              return <Home {...props} posts={posts} />;
            }}
          />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <PrivateRoute
            exact
            path="/settings"
            component={Settings}
            isLoggedIn={this.props.auth.isLoggedIn}
          />
          <Route component={Page404} />
        </Switch>
      </Router>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts,
    auth: state.auth,
  };
}

App.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default connect(mapStateToProps)(App);
