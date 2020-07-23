import React, { useEffect } from "react";
import "./styles.css";
import IMessage from "../../types/messageType";
import Spinner from "../Spinner";
import ChatHeader from "../ChatHeader";
import MessageList from "../MessageList";
import SendMessageInput from "../SendMessageInput";
import { initStorage } from "../../actions/chatActions";
import { connect } from "react-redux";
import { History } from "history";

interface IProps {
  history: History;
  messages?: IMessage[];
  participants?: number;
  chatName: string;
  initStorage: Function;

  isLoading: boolean;
}

function Chat({
  history,
  messages,
  participants,
  chatName,
  initStorage,
  isLoading,
}: IProps) {
  useEffect(() => {
    initStorage();
  }, []);

  if (isLoading) return <Spinner />;
  let lastMessage: string | undefined = "";
  let messagesNumber = 0;
  if (messages && messages!.length > 0) {
    lastMessage = messages![messages!.length - 1].formattedTime;
    messagesNumber = messages!.length;
  }
  return (
    <div className="chat">
      <ChatHeader
        chatName={chatName}
        participants={participants!}
        messagesNumber={messagesNumber}
        lastMessage={lastMessage}
      />
      <MessageList messages={messages!} history={history} />
      <SendMessageInput history={history} />
    </div>
  );
}

interface IStoreState {
  chat: {
    messages?: IMessage[];
    participants?: number;
    chatName: string;
  };
  page: {
    isLoading: boolean;
  };
}

const mapStateToProps = (state: IStoreState) => {
  return {
    messages: state.chat.messages,
    participants: state.chat.participants,
    chatName: state.chat.chatName,
    isLoading: state.page.isLoading,
  };
};
const mapDispatchToProps = {
  initStorage,
};

export default connect(mapStateToProps, mapDispatchToProps)(Chat);
