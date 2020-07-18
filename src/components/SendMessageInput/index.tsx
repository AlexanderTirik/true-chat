import React from "react";
import "./styles.css";
import PropTypes from "prop-types";

interface IState {
  typeMessage: string;
}

interface IProps {
  addMessage: Function;
}

class SendMessageInput extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      typeMessage: "",
    };
    this.handleTyping = this.handleTyping.bind(this);
  }

  static propTypes = {
    addMessage: PropTypes.func,
  };

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
          />
        </form>
        <button
          className="sendMessageButton"
          onClick={() => this.props.addMessage(this.state.typeMessage)}
        >
          Send
        </button>
      </div>
    );
  }
}

export default SendMessageInput;
