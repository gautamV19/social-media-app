import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Comment from './Comment';
import { commentAction } from '../Action/posts';
import { connect } from 'react-redux';

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: '',
    };
  }

  enterComment = (e, postId) => {
    // console.log(e.charCode);
    if (e.target.value && e.charCode === 13) {
      const { comment } = this.state;
      console.log('pressed enter', comment);
      const data = { post_id: postId, content: comment };
      console.log('Comment', data);
      this.props.dispatch(commentAction(data));
      e.target.value = '';
    }
  };

  render() {
    const { post } = this.props;
    return (
      <div className="post-wrapper" key={post._id}>
        <div className="post-header">
          <div className="post-avatar">
            <Link
              to={`/user/${post.user._id}`}
              // to={{
              //   pathname: `/user/${post.user._id}`,
              //   state: {
              //     user: post.user,
              //   },
              // }}
            >
              <img
                src="https://image.flaticon.com/icons/svg/2154/2154651.svg"
                alt="user-pic"
              />
            </Link>
            <div>
              <span className="post-author">{post.user.name}</span>
              <span className="post-time">a minute ago</span>
            </div>
          </div>
          <div className="post-content">{post.content}</div>

          <div className="post-actions">
            <div className="post-like">
              <img
                src="https://image.flaticon.com/icons/svg/1077/1077035.svg"
                alt="likes-icon"
              />
              <span>13</span>
            </div>

            <div className="post-comments-icon">
              <img
                src="https://image.flaticon.com/icons/svg/1380/1380338.svg"
                alt="comments-icon"
              />
              <span>7</span>
            </div>
          </div>
          <div className="post-comment-box">
            <input
              placeholder="Start typing a comment"
              onChange={(e) => {
                this.setState({ comment: e.target.value });
              }}
              onKeyPress={(e) => {
                this.enterComment(e, post._id);
              }}
            />
            {post.comments.map((comment) => (
              <Comment comment={comment} key={comment._id} />
            ))}
          </div>

          <div className="post-comments-list">
            <div className="post-comments-item">
              <div className="post-comment-header">
                <span className="post-comment-author">Bill</span>
                <span className="post-comment-time">a minute ago</span>
                <span className="post-comment-likes">22</span>
              </div>

              <div className="post-comment-content">Random comment</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(Post);
