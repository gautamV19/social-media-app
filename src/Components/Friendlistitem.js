import React from 'react';
import { Link } from 'react-router-dom';

export default function Friendlistitem(props) {
  // console.log(props);
  return (
    <div>
      <Link className="friends-item" to={`/user/${props.friend._id}`}>
        <div className="friends-img">
          <img src="https://t4.ftcdn.net/jpg/00/65/77/27/240_F_65772719_A1UV5kLi5nCEWI0BNLLiFaBPEkUbv5Fv.jpg" alt="user-pic" />
        </div>
        <div className="friends-name">{props.friend.name}</div>
      </Link>
    </div>
  );
}
