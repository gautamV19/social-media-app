import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { comment } from '../Action/posts';

export default class Post extends Component {
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
              value={comment[posts.indexOf(post)]}
              onChange={(e) => {
                this.setState(() => {
                  comment[posts.indexOf(post)] = e.target.value;
                });
              }}
              onKeyPress={(e) => {
                this.enterComment(e, post._id);
              }}
            />
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
