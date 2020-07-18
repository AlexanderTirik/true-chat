import React from "react";
import "./styles.css";

interface IState {}

interface IProps {}

class Header extends React.Component<IProps, IState> {
  render() {
    return (
      <header className="pageHeader">
        <span> green react chat</span>
      </header>
    );
  }
}

export default Header;
