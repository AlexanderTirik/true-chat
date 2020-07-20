import React from "react";
import "./styles.css";
import { editMessage } from "../../actions/chatActions";
import { hideModal } from "../../actions/outgoingMessageActions";
import IMessage from "../../types/messageType";
import { connect } from "react-redux";

interface IState {
  textArea: string;
}

interface IProps {
  editMessage: Function;
  hideModal: Function;
  messages?: IMessage[];
  currentMessageId?: string;
}

class EditModal extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      textArea: "",
    };
    this.handleEdit = this.handleEdit.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleTyping = this.handleTyping.bind(this);
  }

  componentDidMount() {
    const messageId = this.props.currentMessageId;
    const currMessage = this.props.messages!.find(
      (message) => message.idMessage === messageId
    );
    this.setState({ textArea: currMessage!.text });
  }

  handleTyping(event: React.FormEvent<HTMLInputElement>) {
    this.setState({ textArea: event.currentTarget.value });
  }

  handleEdit() {
    this.props.editMessage(this.props.currentMessageId, {
      text: this.state.textArea,
    });
    this.props.hideModal();
  }
  handleClose() {
    this.props.hideModal();
  }

  render() {
    return (
      <div className="editModal">
        <div className="modalRoot">
          <div className="modalHeader">
            <div><span>Edit Message</span></div>
            <button className="closeModalButton" onClick={this.handleClose}>
              x
            </button>
          </div>
          <div className="modalBody">
            <form>
              <input
                type="text"
                value={this.state.textArea}
                onChange={this.handleTyping}
              />
            </form>
          </div>
          <div className="modalFooter">
            <button className="modalEditButton" onClick={this.handleEdit}>
              Edit message
            </button>
          </div>
        </div>
      </div>
    );
  }
}

interface IStoreState {
  chat: {
    messages?: IMessage[];
  };
  outgoingMessage: {
    currentMessageId: string;
  };
}

const mapStateToProps = (state: IStoreState) => {
  return {
    messages: state.chat.messages,
    currentMessageId: state.outgoingMessage.currentMessageId,
  };
};
const mapDispatchToProps = {
  editMessage,
  hideModal,
};

export default connect(mapStateToProps, mapDispatchToProps)(EditModal);
