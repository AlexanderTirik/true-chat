import React from "react";
import "./styles.css";
import IMessage from "../../types/messageType";
import { changeLike } from "../../actions/chatActions";
import { connect } from "react-redux";

interface IProps {
  message: IMessage;
  changeLike: Function;
}

class IncomingMessage extends React.Component<IProps> {

  onLike() {
    this.props.changeLike(this.props.message.idMessage);
  }

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
              <button className="likeButton" onClick={() => this.onLike()}>
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

const mapDispatchToProps = {
  changeLike,
};

export default connect(null, mapDispatchToProps)(IncomingMessage);
