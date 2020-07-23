import React from "react";
import "./styles.css";
import IMessage from "../../types/messageType";
import { changeLike } from "../../actions/chatActions";
import { connect } from "react-redux";

interface IProps {
  message: IMessage;
  changeLike: Function;
  userId: string;
}

interface IState {
  isLiked: boolean;
}
class IncomingMessage extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      isLiked: false,
    };
  }
  componentDidMount() {
    this.props.message.likesId.every((id) => {
      if (id == this.props.userId) {
        this.setState({ isLiked: true });
        return false;
      }
      return true;
    });
  }
  onLike() {
    const likesId = this.props.message.likesId;
    this.props.changeLike(this.props.message.id, this.props.userId, likesId);
  }

  render() {
    const likes = this.props.message.likesId.length;
    return (
      <div className="incomingMessage">
        <div className="avatarBlock">
          <img
            className="incomingMessageAvatar"
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
                {this.state.isLiked ? "❤️" : "💛"}
              </button>
            </div>
            <div className="date">{this.props.message.formattedTime}</div>
          </div>
        </div>
      </div>
    );
  }
}

interface IStoreState {
  page: {
    userId: string;
  };
}

const mapStateToProps = (state: IStoreState) => {
  return {
    userId: state.page.userId,
  };
};

const mapDispatchToProps = {
  changeLike,
};

export default connect(mapStateToProps, mapDispatchToProps)(IncomingMessage);
