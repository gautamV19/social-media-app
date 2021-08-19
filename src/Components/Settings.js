import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateProfile } from '../Action/auth';

function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}

class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.auth.user.name,
      password: '',
      confirm_password: '',
      editmode: false,
    };
  }

  handleChange(fieldname, val) {
    this.setState({
      [fieldname]: val,
    });
    // console.log(this.state);
  }

  saveSettings() {
    const { name, password, confirm_password } = this.state;
    if (password !== confirm_password) {
      alert('Please confirm password');
      return;
    }

    this.props.dispatch(updateProfile({ name, password }));
  }

  render() {
    const { user } = this.props.auth;
    const { editmode, name, password, confirm_password } = this.state;
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
          {editmode ? (
            <input
              type="text"
              onChange={(e) => this.handleChange('name', e.target.value)}
              value={this.state.name}
            />
          ) : (
            <div className="field-value">{user.name}</div>
          )}
        </div>

        {editmode && (
          <div className="field">
            <div className="field-lable">New Password</div>
            <input
              type="text"
              onChange={(e) => this.handleChange('password', e.target.value)}
              value={this.state.password}
            />
          </div>
        )}

        {editmode && (
          <div className="field">
            <div className="field-lable">Confirm Password</div>
            <input
              type="text"
              onChange={(e) =>
                this.handleChange('confirm_password', e.target.value)
              }
              value={this.state.confirm_password}
            />
          </div>
        )}

        <div className="btn-grp">
          {editmode ? (
            <button className="button save-btn" onClick={this.saveSettings}>
              Save
            </button>
          ) : (
            <button
              className="button edit-btn"
              onClick={() => this.handleChange('editmode', true)}
            >
              Edit profile
            </button>
          )}

          {editmode && (
            <div
              className="go-back"
              onClick={() => this.handleChange('editmode', false)}
            >
              Go back
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Settings);
