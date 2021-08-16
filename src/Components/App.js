import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { fetchPosts } from '../Action/posts';
import { Home, Navbar, Page404, Login } from './';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(fetchPosts());
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
          <Route component={Page404} />
        </Switch>
      </Router>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts,
  };
}

App.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default connect(mapStateToProps)(App);
