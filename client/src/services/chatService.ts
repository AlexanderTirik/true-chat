import makeRequest from "../helpers/makeRequest";
import { Method } from "../types/requestMethodType";
import IMessage from "../types/messageType";
import IUser from "../types/userType";
import UserService from "./userService";
import { showError } from "../actions/errorActions";

class ChatService {
  constructor() {
    this.loadChatData = this.loadChatData.bind(this);
  }
  async getMessages() {
    try {
      const apiUrl = "http://127.0.0.1:3001/api/messages";
      const response = await makeRequest(Method.GET, apiUrl);
      let msg = await response.json();
      const users = await UserService.getUsers();
      const messages: IMessage[] = msg.data.map((message: any) => {
        message.formattedTime = this.formatTime(message.createdAt);
        const user = users.find((user: IUser) => user.id == message.userId);
        message.avatar = user.avatar;
        message.user = user.user;
        return message;
      });

      messages.sort(this.compareMessages);

      return messages;
    } catch (error) {
      throw error;
    }
  }
  async loadChatData() {
    const messages = await this.getMessages();
    const participants = this.countParticipants(messages);
    return { messages, participants };
  }
  async sendMessage(text: string, userId: string) {
    const apiUrl = "http://127.0.0.1:3001/api/messages";
    const response = await makeRequest(Method.POST, apiUrl, { userId, text });
    const rsp = await response.json();
    return rsp;
  }
  async deleteMessage(messageId: string) {
    const apiUrl = `http://127.0.0.1:3001/api/messages/${messageId}`;
    const response = await makeRequest(Method.DELETE, apiUrl, {
      id: messageId,
    });
    const rsp = await response.json();
    return rsp;
  }
  formatTime(date: string | Date) {
    const newDate = new Date(date);
    let minutes = newDate.getMinutes().toString();
    if (minutes.length === 1) minutes = "0" + minutes;
    return `${newDate.getHours()}:${minutes}`;
  }
  async getMessageText(messageId: string) {
    const apiUrl = `http://127.0.0.1:3001/api/messages/${messageId}`;
    const response = await makeRequest(Method.GET, apiUrl);
    const rsp = await response.json();
    const isAdmin = localStorage.role === "admin";
    console.log(localStorage.role);

    if (!isAdmin && rsp.data.userId !== localStorage.id) {
      return {
        error: true,
        message: "This is not your message",
      };
    }
    return {
      error: false,
      text: rsp.data.text,
    };
  }

  async editMessage(messageId: string, text: string) {
    const apiUrl = `http://127.0.0.1:3001/api/messages/${messageId}`;
    const response = await makeRequest(Method.PUT, apiUrl, { text });
    const rsp = await response.json();
    return rsp;
  }
  async changeLike(messageId: string, userId: string, likesId: string[]) {
    const apiUrl = `http://127.0.0.1:3001/api/messages/${messageId}`;
    const response = await makeRequest(Method.PUT, apiUrl, { likesId });
    const rsp = await response.json();
    return rsp;
  }

  countParticipants(messages: IMessage[]) {
    const participants = new Set();
    messages.forEach((message: IMessage) => {
      participants.add(message.userId);
    });
    return participants.size;
  }

  compareMessages(a: IMessage, b: IMessage) {
    if (new Date(a.createdAt) > new Date(b.createdAt)) return 1;
    if (new Date(a.createdAt) < new Date(b.createdAt)) return -1;
    return 0;
  }
  getIdMessage() {
    return (
      Math.random().toString(36).substring(2, 15) +
      Math.random().toString(36).substring(2, 15)
    );
  }
}

export default new ChatService();
