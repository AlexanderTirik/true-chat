import React from "react";
import "./styles.css";

interface IState {}

interface IProps {
  participants: number;
  messagesNumber: number;
  chatName: string;
  lastMessage: string | undefined;
}

function ChatHeader({
  participants,
  messagesNumber,
  chatName,
  lastMessage,
}: IProps) {
  return (
    <div className="chatHeader">
      <span className="header">
        <b>Name:</b> {chatName}
      </span>
      <span className="header">
        <b>Participants:</b> {participants}
      </span>
      <span className="header">
        <b>Messages Number:</b> {messagesNumber}
      </span>
      {lastMessage ? (
        <span className="header" id="lastMessage">
          <b>Last message at </b>
          {lastMessage}
        </span>
      ) : null}
    </div>
  );
}

export default ChatHeader;
