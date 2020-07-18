import React from "react";
import "./styles.css";
import IMessage from "../../types/messageType";
import PropTypes from "prop-types";

interface IProps {
  message: IMessage;
  numberMessage: number;
  addLike: Function;
}
interface IState {}

class IncomingMessage extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      likes: 0,
    };
  }

  static propTypes = {
    message: PropTypes.object,
    numberMessage: PropTypes.number,
    addLike: PropTypes.func,
  };

  render() {
    const likes = this.props.message.likes;
    return (
      <div className="incomingMessage">
        <div className="avatarBlock">
          <img
            className="avatar"
            src={this.props.message.avatar}
            alt="avatar"
          />
        </div>
        <div className="data">
          <div className="username">{this.props.message.user}</div>
          <div className="text">
            <span>{this.props.message.text}</span>
          </div>
          <div className="info">
            <div className="likeBlock">
              <span className="like">{likes ? likes : null}</span>
              <button
                className="likeButton"
                onClick={() => this.props.addLike(this.props.numberMessage)}
              >
                {likes ? "❤️" : "💛"}
              </button>
            </div>
            <div className="date">{this.props.message.formattedTime}</div>
          </div>
        </div>
      </div>
    );
  }
}
export default IncomingMessage;
