import React from 'react';
import { Link } from 'react-router-dom';

export default function Friendlistitem(props) {
  return (
    <div>
      <Link className="friends-item" to={`user${props.friend.userId}`}>
        <div className="friends-img">
          <img
            src="https://image.flaticon.com/icons/svg/2154/2154651.svg"
            alt="user-pic"
          />
        </div>
        <div className="friends-name">{props.friend.name}</div>
      </Link>
    </div>
  );
}
