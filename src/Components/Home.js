import React, { Component } from 'react';
import { PostsList } from './';

export default class Home extends Component {
  render() {
    console.log('Home', this.props);
    return (
      <div>
        <PostsList posts={this.props.posts} />
      </div>
    );
  }
}
