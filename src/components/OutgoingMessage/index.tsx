import React from "react";
import "./styles.css";
import IMessage from "../../types/messageType";
import PropTypes from "prop-types";

interface IProps {
  message: IMessage;
  numberMessage: number;
  deleteMessage: Function;
  editMessage: Function;
}
interface IState {
  isEditing: boolean;
  isEdited: boolean;
  isDeleted: boolean;
  isSure: boolean;
  editText: string;
}

class OutgoingMessage extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      isEditing: false,
      isEdited: false,
      isDeleted: false,
      isSure: false,
      editText: this.props.message.text,
    };
    this.handleTyping = this.handleTyping.bind(this);
  }

  static propTypes = {
    message: PropTypes.object,
    numberMessage: PropTypes.number,
    deleteMessage: PropTypes.func,
    editMessage: PropTypes.func,
  };

  parseDate(str: string | Date) {
    return new Date(str);
  }

  handleDelete() {
    this.props.deleteMessage(this.props.numberMessage);
    this.setState({ isDeleted: true });
  }

  handleSure() {
    this.setState({ isSure: true });
  }
  handleStartEditing() {
    this.setState({ isEditing: true });
  }
  handleTyping(event: React.FormEvent<HTMLInputElement>) {
    this.setState({ editText: event.currentTarget.value });
  }
  handleEdit() {
    this.setState({ isEditing: false });
    this.props.editMessage(this.props.numberMessage, this.state.editText);
    this.setState({ isEdited: true });
  }

  render() {
    if (this.state.isDeleted) {
      return (
        <div className="outgoingMessage">
          <div className="data">
            <div
              className="text"
              id={`outgoingText${this.props.numberMessage}`}
            >
              <span> {this.props.message.text}</span>
            </div>
          </div>
        </div>
      );
    }
    return (
      <div className="outgoingMessage">
        <div className="name">{this.props.message.user}</div>
        <div className="data">
          <div className="text">
            {!this.state.isEditing ? (
              <span> {this.props.message.text}</span>
            ) : (
              <div className="editBlock">
                <form className="editForm">
                  <input
                    className="editInput"
                    type="text"
                    value={this.state.editText}
                    onChange={this.handleTyping}
                  />
                </form>
                <button
                  className="submitEditInput"
                  onClick={() => this.handleEdit()}
                >
                  Edit
                </button>
              </div>
            )}
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
            {this.state.isEdited ? (
              <span className="editedSpan">edited</span>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}

export default OutgoingMessage;
