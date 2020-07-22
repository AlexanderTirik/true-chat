import React from "react";
import "./styles.css";
import { connect } from "react-redux";
import { logout } from "../../actions/pageActions";
import {Link} from "react-router-dom"

interface IState {}

interface IProps {
  isLogged: boolean;
  logout: Function;
}

function Header({ isLogged, logout }: IProps) {
  const onLogout = () => {
    logout();
    localStorage.clear()
  };
  return (
    <header className="pageHeader">
      <span className="pageHeaderName"> green react chat</span>
      {isLogged ? (
        <button className="pageHeaderLogout" onClick={onLogout}>
         <Link className="Link" to={`/`}> Logout</Link>
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
