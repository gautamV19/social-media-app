import React, { Component } from "react";
import io from "socket.io-client";
import { connect } from "react-redux";
import "../chat.css";

const CONNECTION_PORT = 4000;

export class Chat extends Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: [], // {content: "", self: true}
      typedMessage: "",
    };
    this.socket = io.connect("http://localhost:4000", {
      transports: ["websocket"],
    });
    this.userEmail = props.user.email;

    if (this.userEmail) {
      this.setupConnections();
    }
  }

  setupConnections = () => {
    const self = this;
    this.socket.on("connect", function () {
      console.log("connection established");

      self.socket.emit("join_room", {
        user_email: self.userEmail,
        chatroom: "socialapp",
      });

      self.socket.on("user_joined", function (data) {
        console.log("NEW USER JOINED", data);
      });
    });

    this.socket.on("receive_message", function (data) {
      // add message to state
      console.log("RECIEVE MESSAGE", data);
      const { messages } = self.state;

      const messageObj = {};

      messageObj.content = data.message;

      if (data.user_email === self.userEmail) {
        messageObj.self = true;
      }

      self.setState({
        messages: [...messages, messageObj],
        typedMessage: "",
      });
    });
  };

  handleSendMsg = () => {
    const { typedMessage } = this.state;
    console.log("sending message", typedMessage);

    if (typedMessage && this.userEmail) {
      this.socket.emit("send_message", {
        message: typedMessage,
        user_email: this.userEmail,
      });
    }
  };

  render() {
    const { messages, typedMessage } = this.state;

    return (
      <div className="chat-container">
        <div className="chat-header">
          Chat
          <img
            src="https://t3.ftcdn.net/jpg/03/73/49/86/240_F_373498649_nBxauQ0ipBSVrVcMpWWVmTpXu3BLvRyY.jpg"
            alt="minus"
            height={17}
          />
        </div>
        <div className="chat-messages">
          {messages.map((message) => (
            <div
              className={
                message.self
                  ? "chat-bubble self-chat"
                  : "chat-bubble other-chat"
              }
            >
              {message.content}
            </div>
          ))}
        </div>
        <div className="chat-footer">
          <input
            type="text"
            onChange={(e) => this.setState({ typedMessage: e.target.value })}
            value={typedMessage}
          />
          <button onClick={this.handleSendMsg}>Submit</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ auth }) => ({
  user: auth.user,
});

export default connect(mapStateToProps)(Chat);
