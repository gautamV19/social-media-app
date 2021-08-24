import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createPost } from '../Action/posts';

class CreatePost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: '',
    };
  }

  addPostbtn = () => {
    this.props.dispatch(createPost(this.state.content));
  };

  render() {
    return (
      <div className="create-post">
        <textarea
          className="add-post"
          value={this.state.content}
          onChange={(e) => {
            this.setState({ content: e.target.value });
          }}
        ></textarea>
        <button id="add-post-btn" onClick={this.addPostbtn}>
          Add Post
        </button>
      </div>
    );
  }
}

export default connect()(CreatePost);
