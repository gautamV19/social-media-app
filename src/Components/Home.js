import React, { Component } from 'react';
import { PostsList } from './';

export default class Home extends Component {
  render() {
    return (
      <div>
        <PostsList posts={this.props.posts} />
      </div>
    );
  }
}
