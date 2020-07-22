import React from "react";
import PropTypes from "prop-types";
import "./styles.css";

interface IState {}

interface IProps {
  participants: number;
  messagesNumber: number;
  chatName: string;
  lastMessage: string;
}

class ChatHeader extends React.Component<IProps, IState> {
  static propTypes = {
    participants: PropTypes.number,
    messagesNumber: PropTypes.number,
    chatName: PropTypes.string,
    lastMessage: PropTypes.string,
  };

  render() {
    return (
      <div className="chatHeader">
        <span className="header">
          <b>Name:</b> {this.props.chatName}
        </span>
        <span className="header">
          <b>Participants:</b> {this.props.participants}
        </span>
        <span className="header">
          <b>Messages Number:</b> {this.props.messagesNumber}
        </span>
        <span className="header" id="lastMessage">
          <b>Last message at </b>
          {this.props.lastMessage}
        </span>
      </div>
    );
  }
}

export default ChatHeader;
