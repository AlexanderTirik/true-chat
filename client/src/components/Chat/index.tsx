import React from "react";
import "./styles.css";
import IMessage from "../../types/messageType";
import Spinner from "../Spinner";
import ChatHeader from "../ChatHeader";
import MessageList from "../MessageList";
import SendMessageInput from "../SendMessageInput";
import { initStorage, addMessage } from "../../actions/chatActions";
import { hideLoading, showLoading } from "../../actions/pageActions";
import { connect } from "react-redux";

interface IProps {
  messages?: IMessage[];
  participants?: number;
  chatName: string;
  initStorage: Function;
  hideLoading: Function;
  showLoading: Function;
  addMessage: Function;
  isLoading: boolean;
}

class Chat extends React.Component<IProps> {
  componentDidMount() {
    this.props.initStorage();
  }

  render() {
    if (this.props.isLoading) return <Spinner />;
    let lastMessage: string | undefined = "";
    if (this.props.messages!.length > 0) {
      lastMessage = this.props.messages![this.props.messages!.length - 1]
        .formattedTime;
    }
    return (
      <div className="chat">
        <ChatHeader
          chatName={this.props.chatName}
          participants={this.props.participants!}
          messagesNumber={this.props.messages!.length}
          lastMessage={lastMessage}
        />
        <MessageList messages={this.props.messages!} />
        <SendMessageInput />
      </div>
    );
  }
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
  hideLoading,
  showLoading,
  addMessage,
};

export default connect(mapStateToProps, mapDispatchToProps)(Chat);
