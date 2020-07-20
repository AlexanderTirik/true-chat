import React from "react";
import "./styles.css";
import ChatService from "../../services/chatService";
import IMessage from "../../types/messageType";
import Spinner from "../Spinner";
import ChatHeader from "../ChatHeader";
import MessageList from "../MessageList";
import SendMessageInput from "../SendMessageInput";
import {
  initStorage,
  hideLoading,
  addMessage,
} from "../../actions/chatActions";
import { connect } from "react-redux";

interface IProps {
  isLoading: boolean;
  messages?: IMessage[];
  participants?: number;
  chatName: string;
  initStorage: Function;
  hideLoading: Function;
  addMessage: Function;
}

class Chat extends React.Component<IProps> {
  componentDidMount() {
    ChatService.loadChatData().then(({ messages, participants }) => {
      this.props.initStorage(messages, participants);
      this.props.hideLoading();
    });
  }

  render() {
    if (this.props.isLoading) return <Spinner />;
    const lastMessage = this.props.messages![this.props.messages!.length - 1]
      .formattedTime;
    return (
      <div className="chat">
        <ChatHeader
          chatName={this.props.chatName}
          participants={this.props.participants!}
          messagesNumber={this.props.messages!.length}
          lastMessage={lastMessage!}
        />
        <MessageList messages={this.props.messages!} />
        <SendMessageInput />
      </div>
    );
  }
}

interface IStoreState {
  chat: {
    isLoading: boolean;
    messages?: IMessage[];
    participants?: number;
    chatName: string;
  };
}

const mapStateToProps = (state: IStoreState) => {
  return {
    isLoading: state.chat.isLoading,
    messages: state.chat.messages,
    participants: state.chat.participants,
    chatName: state.chat.chatName,
  };
};
const mapDispatchToProps = {
  initStorage,
  hideLoading,
  addMessage,
};

export default connect(mapStateToProps, mapDispatchToProps)(Chat);
