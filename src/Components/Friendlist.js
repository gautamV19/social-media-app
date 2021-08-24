import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchFriendsStarted } from '../Action/friend';
import Friendlistitem from './Friendlistitem';

export class Friendlist extends Component {
  render() {
    return (
      <div className="friends-list">
        <div className="header">Friends</div>
        {this.props.friends && this.props.friends.length === 0 && (
          <div className="no-friends">No friends found!</div>
        )}

        {this.props.friends &&
          this.props.friends.map((friend) => (
            <Friendlistitem friend={friend.to_user} key={friend.to_user._id} />
          ))}
      </div>
    );
  }
}

const mapStateToprops = (state) => ({
  friends: state.friendship,
});

export default connect(mapStateToprops)(Friendlist);
