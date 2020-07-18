import React from "react";
import "./styles.css";
import IMessage from "../../types/messageType";
import { weekDay } from "../../types/weekDayType";
import { month } from "../../types/monthType";
import IncomingMessage from "../IncomingMessage";
import OutgoingMessage from "../OutgoingMessage";
import DateLine from "../DateLine";
import PropTypes from "prop-types";

interface IState {}

interface IProps {
  messages: IMessage[];
  addLike: Function;
  editMessage: Function;
  deleteMessage: Function;
}

class MessageList extends React.Component<IProps, IState> {
  static propTypes = {
    messages: PropTypes.array,
    addLike: PropTypes.func,
    editMessage: PropTypes.func,
    deleteMessage: PropTypes.func,
  };

  getFormatDate(dateStr: string | Date) {
    const date = new Date(dateStr);
    if (this.isToday(date)) return "Today";
    if (this.isYesterday(date)) return "Yesterday";
    const dayOfWeek = weekDay[date.getDay()];
    const monthStr = month[date.getMonth()];
    const day = date.getDate();
    return `${dayOfWeek}, ${monthStr} ${day}th`;
  }

  isToday(date: Date) {
    const today = new Date();
    return this.datesEqual(today, date);
  }
  isYesterday(date: Date) {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    return this.datesEqual(yesterday, date);
  }

  datesEqual(date1: Date, date2: Date) {
    if (
      date1.getDate() === date2.getDate() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getFullYear() === date2.getFullYear()
    ) {
      return true;
    } else {
      return false;
    }
  }

  generateMessageLine() {
    const messages = this.props.messages;
    let result = [];
    let dateLineDate = new Date(this.props.messages[0].createdAt);
    result.push(<DateLine date={this.getFormatDate(dateLineDate)} />);
    for (let i = 0; i < messages.length; i++) {
      let messageDay = new Date(messages[i].createdAt).getDate();
      let dateLineDateDay = dateLineDate.getDate();
      if (messageDay !== dateLineDateDay) {
        dateLineDate = new Date(messages[i].createdAt);
        result.push(<DateLine date={this.getFormatDate(dateLineDate)} />);
      }
      result.push(this.getMessageComponent(messages[i], i));
    }
    return result;
  }

  getMessageComponent(message: IMessage, numberMessage: number) {
    if (message.id === "0") {
      return (
        <OutgoingMessage
          message={message}
          numberMessage={numberMessage}
          editMessage={this.props.editMessage}
          deleteMessage={this.props.deleteMessage}
          key={numberMessage}
        />
      );
    } else {
      return (
        <IncomingMessage
          message={message}
          numberMessage={numberMessage}
          addLike={this.props.addLike}
          key={numberMessage}
        />
      );
    }
  }

  render() {
    return <div className="messageList">{this.generateMessageLine()}</div>;
  }
}

export default MessageList;
