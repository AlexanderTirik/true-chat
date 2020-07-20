import React from "react";
import "./styles.css";
import IMessage from "../../types/messageType";
import { deleteMessage, editMessage } from "../../actions/chatActions";
import {
  showModal,
  setCurrentMessageId,
} from "../../actions/outgoingMessageActions";
import { connect } from "react-redux";


interface IProps {
  message: IMessage;
  deleteMessage: Function;
  editMessage: Function;
  showModal: Function;
  setCurrentMessageId: Function;
}
interface IState {
  isSure: boolean;
}

class OutgoingMessage extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      isSure: false,
    };
  }

  handleDelete() {
    this.props.deleteMessage(this.props.message.idMessage);
  }

  handleSure() {
    this.setState({ isSure: true });
  }

  handleStartEditing() {
    this.props.setCurrentMessageId(this.props.message.idMessage);
    this.props.showModal();
  }
  
  // handleEdit(text: string, messageId: string) {
  //   this.props.editMessage(messageId, { text });
  //   this.props.hideModal();
  // }
  // handleTyping(event: React.FormEvent<HTMLInputElement>) {
  //   this.setState({ editText: event.currentTarget.value });
  // }
  
  render() {
    return (
      <div className="outgoingMessage">
       
        <div className="name">{this.props.message.user}</div>
        <div className="data">
          <div className="text">
            <span> {this.props.message.text}</span>
          </div>
          <div className="info">
            <div className="date">{this.props.message.formattedTime}</div>

            <button
              onClick={() => this.handleStartEditing()}
              className="editButton"
            >
              Edit
            </button>
            {!this.state.isSure ? (
              <button
                onClick={() => this.handleSure()}
                className="deleteButton"
              >
                Delete
              </button>
            ) : null}
            {this.state.isSure ? (
              <button
                onClick={() => this.handleDelete()}
                className="sureButton"
              >
                Sure?
              </button>
            ) : null}
            {/* {this.props.isEdited ? (
              <span className="editedSpan">edited</span>
            ) : null} */}
          </div>
        </div>
      </div>
    );
  }
}


const mapDispatchToProps = {
  deleteMessage,
  editMessage,
  showModal,
  setCurrentMessageId,
};

export default connect(null, mapDispatchToProps)(OutgoingMessage);
