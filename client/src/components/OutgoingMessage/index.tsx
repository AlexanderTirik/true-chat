import React from "react";
import "./styles.css";
import IMessage from "../../types/messageType";
import { deleteMessage, editMessage } from "../../actions/chatActions";
import { connect } from "react-redux";
import { History } from "history";

interface IProps {
  history: History;
  message: IMessage;
  deleteMessage: Function;
  editMessage: Function;
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
    this.onEdit = this.onEdit.bind(this);
  }

  handleDelete() {
    this.props.deleteMessage(this.props.message.id);
  }

  handleSure() {
    this.setState({ isSure: true });
  }
  onEdit() {
    this.props.history.push(`/edit/${this.props.message.id}`);
  }

  render() {
    const isEdited = this.props.message.editedAt ? 1 : 0;
    return (
      <div className="outgoingMessage">
        <div className="name">{this.props.message.user}</div>
        <div className="data">
          <div className="text">
            <span> {this.props.message.text}</span>
          </div>
          <div className="info">
            <div className="date">{this.props.message.formattedTime}</div>

            <button className="editButton" onClick={this.onEdit}>
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
            {isEdited ? <span className="editedSpan">edited</span> : null}
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  deleteMessage,
  editMessage,
};

export default connect(null, mapDispatchToProps)(OutgoingMessage);
