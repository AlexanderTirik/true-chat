import React from "react";
import "./styles.css";
import { History } from "history";

interface IProps {
  history: History;
  avatar: string;
  user: string;
  id: string;
  role: string;
  password: string;
}
function User({ avatar, user, id, role, password, history }: IProps) {
  const onEdit = () => {
    history.push(`/userEdit/${id}`);
  };

  return (
    <div className="user">
      <div>
        <img src={avatar} alt="avatar" className="userAvatar" />
      </div>
      <div className="userInfo">
        <span className="userInfoSpan">
          <b>Id: </b>
          {id}
        </span>
        <span className="userInfoSpan">
          <b>Username: </b>
          {user}
        </span>
        <span className="userInfoSpan">
          <b>Role: </b>
          {role}
        </span>
        <span className="userInfoSpan">
          <b>Password: </b>
          {password}
        </span>
        <button className="userInfoEdit" onClick={onEdit}>
          Edit
        </button>
      </div>
    </div>
  );
}
export default User;
