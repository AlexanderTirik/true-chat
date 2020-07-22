import { messages } from "../data";
import IMessage from "../types/messageType";

class Message {
  constructor() {
    this.getOne = this.getOne.bind(this);
    this.getAll = this.getAll.bind(this);
    this.create = this.create.bind(this);
    this.update = this.update.bind(this);
    this.delete = this.delete.bind(this);
  }
  getOne({ id }: { id: string }) {
    const message = messages.find((message) => message.id === id);
    return message;
  }
  getAll({ userId }: { userId?: string }) {
    if (userId) {    
      const newMessages = messages.filter(
        (message) => message.userId == userId
      );
      return newMessages;
    }    
    return messages;
  }
  create({ userId, text }: { userId: string; text: string }) {
    if (!userId || !text) return;
    const newMessage: IMessage = {
      id: this.createMessageId(),
      text,
      userId,
      likesId: [],
      createdAt: new Date(),
    };
    messages.push(newMessage);
    return newMessage;
  }
  update({ id }: { id: string }, data: { likesId?: string[]; text?: string }) {
    let message = messages.find((msg) => msg.id == id);
    if (message) {
      const messageIndex = messages.indexOf(message);
      message.editedAt = new Date();
      message = { ...message, ...data };
      messages[messageIndex] = message;
      return message;
    }
  }
  delete({ id }: { id: string }) {
    const deletedMessage = messages.find((msg) => msg.id == id);
    if (deletedMessage) {
      const index = messages.indexOf(deletedMessage);
      if (~index) messages.splice(index, 1);
      return deletedMessage;
    }
  }
  createMessageId() {
    return (
      Math.random().toString(36).substring(2, 15) +
      Math.random().toString(36).substring(2, 15)
    );
  }
}

export default Message;
