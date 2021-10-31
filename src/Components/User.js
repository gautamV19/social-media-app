import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { addToYourFriend, removeFriendAction } from '../Action/friend';
import { startUser, userProfile } from '../Action/profile';
import { getToken, Imagesrc } from '../Helpers/extraFunctions';
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

  componentDidUpdate(prevProps, prevState) {
    const {
      match: { params: prevParams },
    } = prevProps;

    const {
      match: { params: currParams },
    } = this.props;

    if (prevParams && currParams && prevParams.userId !== currParams.userId) {
      this.props.dispatch(startUser());
      this.props.dispatch(userProfile(currParams.userId));
    }
  }

  addFriend = async () => {
    // console.log('Add friend clicked');

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

    // console.log('Add friend clicked', data);

    if (data.success) {
      this.setState({ success: true, successMsg: data.message });
      this.props.dispatch(addToYourFriend(data.data.friendship));
      return;
    } else {
      this.setState({
        success: null,
        error: data.message,
      });
    }
  };
  removeFriend = async () => {
    const userId = this.props.match.params.userId;
    const url = urls.removefriend(userId);
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Bearer ${getToken()}`,
      },
    };
    const response = await fetch(url, options);
    const data = await response.json();
    console.log('Removed ', data);

    if (data.success) {
      this.setState({
        success: true,
        successMsg: data.message,
      });
      await this.props.dispatch(removeFriendAction(userId));
      // this.forceUpdate();
      return <Redirect to="/" />;
    } else {
      this.setState({
        success: null,
        error: data.message,
      });
    }
  };

  isFriend = () => {
    const userId = this.props.match.params.userId;
    // console.log('Inside isFriend', this.props.friends);

    const index = this.props.friends
      .map((friend) => friend.to_user._id)
      .indexOf(userId);

    if (index !== -1) {
      return true;
    }

    return false;
  };

  render() {
    console.log('Props of user', this.props);
    const { user, inProccess } = this.props;
    console.log('User Profile', { user, inProccess });
    console.log('match params', this.props.match.params.userId);
    // const { user } = this.props.location.state;
    // console.log('Your user inside user component', user);

    const { successMsg, success, error } = this.state;

    const isMyFriend = this.isFriend();
    console.log('isMyFriend', isMyFriend);
    if (inProccess) {
      return <h1>Loading..</h1>;
    }

    return (
      <div className="settings">
        <div className="img-container">
          <img src="https://t4.ftcdn.net/jpg/00/65/77/27/240_F_65772719_A1UV5kLi5nCEWI0BNLLiFaBPEkUbv5Fv.jpg" alt="user-dp" id="user-dp" />
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

        {success && <div className="alert success-dailog">{successMsg}</div>}
        {error && <div className="alert error-dailog">{error}</div>}
      </div>
    );
  }
}

export default connect(mapStateToProps)(User);
