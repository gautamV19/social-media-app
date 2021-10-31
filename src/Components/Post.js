import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Comment from './Comment';
import {
  commentAction,
  likingAction,
  listOfLikesAction,
} from '../Action/posts';
import { userProfile } from '../Action/profile';
import { connect } from 'react-redux';
import { Imagesrc } from '../Helpers/extraFunctions';
import { urls } from '../Helpers/urls';

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
      console.log(postId, 'Comment', data);
      this.props.dispatch(commentAction(data));
      e.target.value = '';
    }
  };

  handleLike = () => {
    const { auth } = this.props;
    this.props.dispatch(
      likingAction(this.props.post._id, 'Post', auth.user._id)
    );
  };

  handleLikeList = (id) => {
    let data = {
      id,
      type: 'Post',
    };
    this.props.dispatch(listOfLikesAction(data));
  };
  render() {
    const { post } = this.props;
    const { user } = this.props.auth;
    const isLiked = post.likes.includes(user._id);

    return (
      <div className="post-wrapper" key={post._id}>
        <div className="post-header">
          <div className="post-avatar">
            <Link
              to={`user/${post.user._id}`}
            >
              <img src="https://t4.ftcdn.net/jpg/00/65/77/27/240_F_65772719_A1UV5kLi5nCEWI0BNLLiFaBPEkUbv5Fv.jpg" alt="user-pic" />
            </Link>
            <div>
              <span className="post-author">{post.user.name}</span>
              <span className="post-time">a minute ago</span>
            </div>
          </div>
          <div className="post-content">{post.content}</div>

          <div className="post-actions">
            <div className="post-like">
              <button className="post-like no-btn" onClick={this.handleLike}>
                {isLiked ? (
                  <img
                    src="https://image.flaticon.com/icons/svg/1076/1076984.svg"
                    alt="like post"
                  />
                ) : (
                  <img
                    src="https://image.flaticon.com/icons/svg/1077/1077035.svg"
                    alt="likes-icon"
                  />
                )}
              </button>
              <button
                style={{
                  backgroundColor: 'pink',
                  border: '0',
                  cursor: 'pointer',
                  borderRadius: '10px',
                  textAlign: 'center',
                }}
                onClick={() => {
                  this.handleLikeList(post._id);
                }}
              >
                <span>{post.likes.length}</span>
              </button>
            </div>

            <div className="post-comments-icon">
              <img
                src="https://image.flaticon.com/icons/svg/1380/1380338.svg"
                alt="comments-icon"
              />
              <span>{post.comments.length}</span>
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
              <Comment
                comment={comment}
                key={comment._id}
                dispatch={this.props.dispatch}
                userId={user._id}
                post_id={post._id}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

function mapState(state) {
  return {
    auth: state.auth,
  };
}

export default connect(mapState)(Post);
