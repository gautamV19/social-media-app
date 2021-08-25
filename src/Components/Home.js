import React, { Component } from 'react';
import { PostsList } from './';
import Chat from './Chat';
import Friendlist from './Friendlist';

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <PostsList posts={this.props.posts} />
        {this.props.isLoggedIn && <Friendlist />}
        {this.props.isLoggedIn && <Chat />}
      </div>
    );
  }
}
