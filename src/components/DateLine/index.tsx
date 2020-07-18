import React from "react";
import PropTypes from "prop-types";
import "./styles.css";

interface IState {}

interface IProps {
  date: string;
}

class DateLine extends React.Component<IProps, IState> {
  static propTypes = {
    date: PropTypes.string,
  };

  render() {
    return (
      <div className="dateLine">
        <span>{this.props.date}</span>
      </div>
    );
  }
}

export default DateLine;
