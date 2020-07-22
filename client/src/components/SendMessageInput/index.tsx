import React from "react";
import "./styles.css";
import { addMessage } from "../../actions/chatActions";
import {
  setCurrentMessageId,
  showModal,
} from "../../actions/outgoingMessageActions";
import { connect } from "react-redux";
import IMessage from "../../types/messageType";
import ChatService from "../../services/chatService";

interface IState {
  typeMessage: string;
}

interface IProps {
  messages: IMessage[];
  addMessage: Function;
  setCurrentMessageId: Function;
  showModal: Function;
}

class SendMessageInput extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      typeMessage: "",
    };
    this.handleTyping = this.handleTyping.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  onSend() {
    const message: IMessage = {
      id: ChatService.getIdMessage(),
      userId: "0",
      text: this.state.typeMessage,
      user: "You",
      createdAt: new Date(),
      formattedTime: ChatService.formatTime(new Date()),
      likes: 0,
    };
    this.props.addMessage(message);
  }
  handleKeyDown(event: React.KeyboardEvent) {
    if (event.keyCode === 38) {
      const lastMessage = this.props.messages[this.props.messages.length - 1];
      if (lastMessage.userId === "0") {
        this.props.setCurrentMessageId(lastMessage.id);
        this.props.showModal();
      }
    }
  }

  handleTyping(event: React.FormEvent<HTMLInputElement>) {
    this.setState({ typeMessage: event.currentTarget.value });
  }

  render() {
    return (
      <div className="sendMessageInput">
        <form className="sendMessageForm">
          <input
            type="text"
            className="sendMessageTextArea"
            value={this.state.typeMessage}
            onChange={this.handleTyping}
            onKeyDown={this.handleKeyDown}
          />
        </form>
        <button className="sendMessageButton" onClick={() => this.onSend()}>
          Send
        </button>
      </div>
    );
  }
}

interface IStoreState {
  chat: {
    messages?: IMessage[];
  };
}

const mapStateToProps = (state: IStoreState) => {
  return {
    messages: state.chat.messages!,
  };
};

const mapDispatchToProps = {
  addMessage,
  showModal,
  setCurrentMessageId,
};

export default connect(mapStateToProps, mapDispatchToProps)(SendMessageInput);
