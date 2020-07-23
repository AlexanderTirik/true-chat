import React from "react";
import "./styles.css";
import { editMessage } from "../../actions/chatActions";
import { connect } from "react-redux";
import { showLoading, hideLoading } from "../../actions/pageActions";
import { showError } from "../../actions/errorActions";
import Spinner from "../Spinner";
import ChatService from "../../services/chatService";
import { History } from "history";

interface IState {
  textArea: string;
  messageId: string;
}

interface IProps {
  history: History;
  editMessage: Function;
  isLoading: boolean;
  hideLoading: Function;
  showError: Function;
  match: {
    params: {
      messageId?: string;
    };
  };
}

class Edit extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      textArea: "",
      messageId: "",
    };

    this.handleTyping = this.handleTyping.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }
  async componentDidMount() {
    const messageId = this.props.match.params.messageId;
    if (messageId) {
      this.setState({ messageId });

      const response = await ChatService.getMessageText(messageId);
      if (response.error) {
        this.props.showError(response.message);
      } else {
        this.setState({ textArea: response.text });
      }
    }
    this.props.hideLoading();
  }

  handleEdit() {
    this.props.editMessage(this.state.messageId, this.state.textArea);
    this.props.history.push("/");
  }

  handleTyping(event: React.FormEvent<HTMLInputElement>) {
    this.setState({ textArea: event.currentTarget.value });
  }

  onClose() {
    this.props.history.push("/");
  }
  render() {
    if (this.props.isLoading) return <Spinner />;
    return (
      <div className="edit">
        <div className="editRoot">
          <div className="editHeader">
            <div>
              <span>Edit Message</span>
            </div>
            <button className="closeModalButton" onClick={() => this.onClose()}>
                x
            </button>
          </div>
          <div className="editBody">
            <form>
              <input
                type="text"
                value={this.state.textArea}
                onChange={this.handleTyping}
              />
            </form>
          </div>
          <div className="editFooter">
            <button className="editButtonSubmit" onClick={this.handleEdit}>
                {" "}
                Edit message{" "}
            </button>
          </div>
        </div>
      </div>
    );
  }
}

interface IStoreState {
  page: {
    isLoading: boolean;
  };
}

const mapStateToProps = (state: IStoreState) => {
  return {
    isLoading: state.page.isLoading,
  };
};
const mapDispatchToProps = {
  showLoading,
  hideLoading,
  editMessage,
  showError,
};

export default connect(mapStateToProps, mapDispatchToProps)(Edit);
