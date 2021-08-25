import React from 'react';
import { likingAction } from '../Action/posts';

function Comment({ comment, dispatch, uesrId, post_id }) {
  const handleCommentLike = () => {
    console.log('Liked the comment');
    const forComment = {
      post_id,
      comment_id: comment._id,
    };
    dispatch(likingAction(comment._id, 'Comment', uesrId, forComment));
  };
  return (
    <div className="post-comment-item">
      <div className="post-comment-header">
        <span className="post-comment-author">{comment.user.name}</span>
        <span className="post-comment-time">a minute ago</span>
        <button
          className="no-btn"
          onClick={handleCommentLike}
          style={{ cursor: 'pointer' }}
        >
          <span className="post-comment-likes">
            {comment.likes.length} likes
          </span>
        </button>
      </div>

      <div className="post-comment-content">{comment.content}</div>
    </div>
  );
}

export default Comment;
