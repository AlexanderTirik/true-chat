import Controller from "./Controller";
import MessageService from "../services/messageService";
import { messageModel } from "../models/index";
const messageService = new MessageService(messageModel);

class MessageController extends Controller {
  constructor(service: MessageService) {
    super(service);
  }
}

export default new MessageController(messageService);
