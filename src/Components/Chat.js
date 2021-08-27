import React, { Component } from 'react';
import { connect } from 'react-redux';
import io from 'socket.io-client';
import '../chat.css';

class Chat extends Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: [], // {content: 'some message', self: true}
      typedMessage: '',
    };

    // this.socket = io('http://localhost:3000/');
    // this.userEmail = props.user.email;

    // // console.log('Chat Props', props);
    // if (this.userEmail) {
    //   this.setupConnections();
    // }
  }

  // setupConnections = () => {
  //   this.socket.on('chat-message', (data) => {
  //     console.log(data);
  //   });
  // };

  // setupConnections = () => {
  //   console.log('connction request');
  //   const thisSocket = this.socket;
  //   const self = this;

  //   this.socket.on('connect', () => {
  //     console.log('CONNECTION ESTABLISHED');

  //     thisSocket.emit('join_room', {
  //       user_email: this.userEmail,
  //       chatroom: 'myApp1',
  //     });

  //     thisSocket.on('user_joined', (data) => {
  //       console.log('NEW USER JOINED', data);
  //     });
  //   });

  //   this.socket.on('recieve_message', (data) => {
  //     const { messages } = self.state;
  //     const messageObject = '';
  //     messageObject.content = data.message;

  //     if (data.user_email === self.props.user.email) {
  //       messageObject.self = true;
  //     }

  //     self.setState({
  //       messages: [...messages, messageObject],
  //       typedMessage: '',
  //     });
  //   });
  // };

  handleSubmit = () => {
    const { typedMessage } = this.state;

    // if (typedMessage && this.userEmail) {
    //   this.socket.on('send_message', {
    //     message: typedMessage,
    //     user_email: this.userEmail,
    //     chatroom: 'myApp1',
    //   });
    // }
  };

  render() {
    const { typedMessage, messages } = this.state;

    return (
      <div className="chat-container">
        <div className="chat-header">
          Chat
          <img
            src="https://www.iconsdb.com/icons/preview/white/minus-5-xxl.png"
            alt=""
            height={17}
          />
        </div>
        <div className="chat-messages">
          {messages.map((message) => (
            <div
              className={
                message.self
                  ? 'chat-bubble self-chat'
                  : 'chat-bubble other-chat'
              }
            >
              {message.content}
            </div>
          ))}
        </div>
        <div className="chat-footer">
          <input
            type="text"
            value={typedMessage}
            onChange={(e) => this.setState({ typedMessage: e.target.value })}
          />
          <button onClick={this.handleSubmit}>Sent</button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.auth.user,
  };
}

export default connect(mapStateToProps)(Chat);
