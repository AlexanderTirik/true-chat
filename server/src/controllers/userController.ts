import { Request, Response } from "express";
import Controller from "./Controller";
import UserService from "../services/userService";
import { userModel, messageModel } from "../models/index";
const userService = new UserService(userModel, messageModel);

class UserController extends Controller {
  service: UserService;
  constructor(service: UserService) {
    super(service);
    this.service = service;
    this.login = this.login.bind(this);
  }

  async login(req: Request, res: Response) {
    const response = await this.service.login(req.body);
    
    return res.status(response.statusCode).send(response);
  }
}

export default new UserController(userService);
