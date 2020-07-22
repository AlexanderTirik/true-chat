import Service from "./service";
import { messageModel } from "../models";

class MessageService extends Service {
  constructor(model:typeof messageModel) {
    super(model);
  }
}

export default MessageService;
