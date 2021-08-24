import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import CreatePost from './CreatePost';
import { connect } from 'react-redux';

import Post from './Post';

class PostsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: new Array(props.posts.length),
    };
  }

  render() {
    const { posts } = this.props;
    // console.log('posts', posts);
    const { comment } = this.state;
    // console.log(comment);
    return (
      <div className="posts-list">
        <CreatePost />
        {posts.map((post) => (
          <Post post={post} key={post._id} />
        ))}
      </div>
    );
  }
}

PostsList.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default connect()(PostsList);
