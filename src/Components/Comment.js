import React from 'react';
import {
  commentDeleteAction,
  likingAction,
  listOfLikesAction,
} from '../Action/posts';

function Comment({ comment, dispatch, uesrId, post_id }) {
  const handleCommentLike = () => {
    console.log('Liked the comment');
    const forComment = {
      post_id,
      comment_id: comment._id,
    };
    dispatch(likingAction(comment._id, 'Comment', uesrId, forComment));
  };
  const handleCommentList = (id) => {
    let data = {
      id,
      type: 'Comment',
    };
    dispatch(listOfLikesAction(data));
  };

  return (
    <div className="post-comment-item">
      <div className="post-comment-header">
        <span className="post-comment-author">{comment.user.name}</span>
        <span className="post-comment-time">a minute ago</span>
        <div className="post-like">
          <button
            className="post-like no-btn"
            onClick={handleCommentLike}
            style={{ cursor: 'pointer' }}
          >
            <img
              src="https://image.flaticon.com/icons/png/128/633/633759.png"
              alt="likes-icon"
              style={{ height: '16px' }}
            />
          </button>
        </div>

        <button
          className="no-btn"
          id="list-of-comment"
          onClick={() => {
            handleCommentList(post_id);
          }}
          style={{ cursor: 'pointer' }}
        >
          <span className="post-comment-likes">
            {comment.likes.length} likes
          </span>
        </button>
      </div>

      <div className="post-comment-content">{comment.content}</div>

      {
        <button
          id="delete-comment"
          className="post-like no-btn"
          onClick={() => {
            dispatch(commentDeleteAction(comment._id, post_id));
          }}
          style={{ cursor: 'pointer' }}
        >
          <img
            src="https://image.flaticon.com/icons/png/128/812/812853.png"
            alt="delete-post-icon"
            style={{ height: '16px' }}
          />
        </button>
      }
    </div>
  );
}

export default Comment;
//https://image.flaticon.com/icons/png/128/812/812853.png
