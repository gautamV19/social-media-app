import React from 'react';
import { Link } from 'react-router-dom';
import { Imagesrc } from '../Helpers/extraFunctions';

export default function Friendlistitem(props) {
  // console.log(props);
  return (
    <div>
      <Link className="friends-item" to={`/user/${props.friend._id}`}>
        <div className="friends-img">
          <img src={Imagesrc()} alt="user-pic" />
        </div>
        <div className="friends-name">{props.friend.name}</div>
      </Link>
    </div>
  );
}
