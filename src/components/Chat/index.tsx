import React from "react";
import "./styles.css";
import ChatService from "../../services/chatService";
import IMessage from "../../types/messageType";
import Spinner from "../Spinner";
import ChatHeader from "../ChatHeader";
import MessageList from "../MessageList";
import SendMessageInput from "../SendMessageInput";
import chatService from "../../services/chatService";

interface IState {
  isLoading: boolean;
  messages?: IMessage[];
  participants?: number;
  messagesNumber?: number;
  chatName: string;
}

interface IProps {}

class Chat extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      chatName: "Telegram",
      isLoading: true,
    };
    this.addLike = this.addLike.bind(this);
    this.addMessage = this.addMessage.bind(this);
    this.deleteMessage = this.deleteMessage.bind(this);
    this.editMessage = this.editMessage.bind(this);
  }

  componentDidMount() {
    ChatService.loadChatData().then(
      ({ messages, participants, messagesNumber }) => {
        this.setState({
          isLoading: false,
          messages,
          participants,
          messagesNumber,
        });
      }
    );
  }

  addLike(messageNumber: number) {
    const messages = this.state.messages;
    if (messages![messageNumber].likes) {
      messages![messageNumber].likes! = 0;
    } else {
      messages![messageNumber].likes = 1;
    }
    this.setState({ messages });
  }

  addMessage(text: string) {
    if (text) {
      const messages = this.state.messages;
      messages!.push({
        id: "0",
        text,
        user: "You",
        createdAt: new Date(),
        formattedTime: chatService.formatTime(new Date()),
      });
      const messagesNumber = this.state.messagesNumber! + 1;
      this.setState({ messages, messagesNumber });
    }
  }

  deleteMessage(messageNumber: number) {
    const messages = this.state.messages;
    messages![messageNumber].text = "This message has been deleted";
    const messagesNumber = this.state.messagesNumber! - 1;
    this.setState({ messages, messagesNumber });
  }

  editMessage(messageNumber: number, newText: string) {
    const messages = this.state.messages;
    messages![messageNumber].text = newText;
    this.setState({ messages });
  }

  render() {
    if (this.state.isLoading) return <Spinner />;
    const lastMessage = this.state.messages![this.state.messages!.length - 1]
      .formattedTime;
    return (
      <div className="chat">
        <ChatHeader
          chatName={this.state.chatName!}
          participants={this.state.participants!}
          messagesNumber={this.state.messagesNumber!}
          lastMessage={lastMessage!}
        />
        <MessageList
          messages={this.state.messages!}
          addLike={this.addLike}
          deleteMessage={this.deleteMessage}
          editMessage={this.editMessage}
        />
        <SendMessageInput addMessage={this.addMessage} />
      </div>
    );
  }
}

export default Chat;
