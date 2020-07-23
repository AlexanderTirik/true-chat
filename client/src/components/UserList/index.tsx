import React, { useEffect } from "react";
import "./styles.css";
import User from "../User";
import IUser from "../../types/userType";
import Spinner from "../Spinner";
import { connect } from "react-redux";
import { initStorage } from "../../actions/userActions";
import { History } from "history";

interface IProps {
  history: History;
  userList: IUser[];
  isLoading: boolean;
  initStorage: Function;
}
function UserList({ userList, isLoading, initStorage, history }: IProps) {
  useEffect(() => {
    initStorage();
  }, []);
  if (isLoading) return <Spinner />;
  return (
    <div className="userList">
      {userList
        ? userList.map((userEl, i) => (
            <User
              history={history}
              avatar={userEl.avatar}
              user={userEl.user}
              password={userEl.password}
              role={userEl.role}
              id={userEl.id}
              key={userEl.id + i}
            />
          ))
        : null}
    </div>
  );
}

interface IStoreState {
  page: {
    isLoading: boolean;
  };
  user: {
    userList: IUser[];
  };
}

const mapStateToProps = (state: IStoreState) => {
  return {
    userList: state.user.userList,
    isLoading: state.page.isLoading,
  };
};
const mapDispatchToProps = {
  initStorage,
};
export default connect(mapStateToProps, mapDispatchToProps)(UserList);
