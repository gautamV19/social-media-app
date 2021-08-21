import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToYourFriend } from '../Action/friend';
import { startUser, userProfile } from '../Action/profile';
import { getToken } from '../Helpers/extraFunctions';
import { urls } from '../Helpers/urls';

function mapStateToProps(state) {
  return {
    user: state.userProfile.user,
    inProccess: state.userProfile.inProccess,
    friends: state.friendship,
  };
}

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      success: false,
      error: '',
      successMsg: '',
    };
  }

  componentDidMount() {
    const userId = this.props.match.params.userId;
    // console.log(userId);
    this.props.dispatch(startUser());
    this.props.dispatch(userProfile(userId));
  }

  addFriend = async () => {
    console.log('Add friend clicked');

    const userId = this.props.match.params.userId;
    const url = urls.addfriend(userId);

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Bearer ${getToken()}`,
      },
    };
    const response = await fetch(url, options);
    const data = await response.json();

    console.log('Add friend clicked', data);

    if (data.success) {
      this.setState({ success: true, successMsg: data.message });
      this.props.dispatch(addToYourFriend(data.data.friendship));
      return;
    }
    this.setState = { success: false, error: data.message };
  };
  removeFriend = () => {
    const userId = this.props.match.params.userId;
    const url = urls.removefriend(userId);
  };

  isFriend = () => {
    const userId = this.props.match.params.userId;
    console.log('Inside isFriend', this.props.friends);

    this.props.friends.map((friend) => {
      if (friend.to_user._id === userId) {
        console.log('Inside isFriend', friend.to_user._id, userId);
        return true;
      }
    });
    return false;
  };

  render() {
    console.log('Props of user', this.props);
    const { user, inProccess } = this.props;
    console.log('User Profile', { user, inProccess });
    // const { user } = this.props.location.state;
    // console.log('Your user inside user component', user);

    const { success, error } = this.state;

    const isMyFriend = this.isFriend();
    console.log('isMyFriend', isMyFriend);
    if (inProccess) {
      return <h1>Loading..</h1>;
    }

    return (
      <div className="settings">
        <div className="img-container">
          <img
            src="https://image.flaticon.com/icons/svg/2154/2154651.svg"
            alt="user-dp"
            id="user-dp"
          />
        </div>
        <div className="field">
          <div className="field-lable">Email</div>
          <div className="field-value">{user.email}</div>
        </div>
        <div className="field">
          <div className="field-lable">Name</div>
          <div className="field-value">{user.name}</div>
        </div>

        {isMyFriend ? (
          <button className="button save-btn" onClick={this.removeFriend}>
            Remove Friend
          </button>
        ) : (
          <button className="button save-btn" onClick={this.addFriend}>
            Add Friend
          </button>
        )}

        {success && (
          <div className="alert success-dailog">{'Added to your friends'}</div>
        )}
        {error && <div className="alert error-dailog">{error}</div>}
      </div>
    );
  }
}

export default connect(mapStateToProps)(User);
