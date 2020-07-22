import React from "react";
import "./styles.css";

interface IState {}

interface IProps {}

class Footer extends React.Component<IProps, IState> {


  render() {
    return (
      <footer className="pageFooter">
        <span>Created by A.Tirik </span>🚀
      </footer>
    );
  }
}

export default Footer;
