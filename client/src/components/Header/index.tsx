import React from "react";
import "./styles.css";
import { connect } from "react-redux";
import { logout } from "../../actions/pageActions";
import { useHistory } from "react-router";

interface IState {}

interface IProps {
  isLogged: boolean;
  logout: Function;
}

function Header({ isLogged, logout }: IProps) {
  const history = useHistory();
  const onLogout = () => {
    logout();
    localStorage.clear();
    history.push("/");
  };
  return (
    <header className="pageHeader">
      <span className="pageHeaderName"> green react chat</span>
      {isLogged ? (
        <button className="pageHeaderLogout" onClick={onLogout}>
          Logout
        </button>
      ) : null}
    </header>
  );
}

interface IStoreState {
  page: {
    isLogged: boolean;
  };
}
const mapStateToProps = (state: IStoreState) => {
  return {
    isLogged: state.page.isLogged,
  };
};
const mapDispatchToProps = {
  logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
