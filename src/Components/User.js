import React, { Component } from 'react';
import { connect } from 'react-redux';
import { startUser, userProfile } from '../Action/profile';

function mapStateToProps(state) {
  return {
    user: state.userProfile.user,
    inProccess: state.userProfile.inProccess,
  };
}

class User extends Component {
  componentDidMount() {
    const userId = this.props.match.params.userId;
    console.log(userId);
    this.props.dispatch(startUser());
    this.props.dispatch(userProfile(userId));
  }

  render() {
    console.log('Props of user', this.props);
    const { user, inProccess } = this.props;
    console.log('User Profile', { user, inProccess });
    // const { user } = this.props.location.state;
    // console.log('Your user inside user component', user);

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

        <button className="button save-btn">Add Friend</button>
      </div>
    );
  }
}

export default connect(mapStateToProps)(User);
