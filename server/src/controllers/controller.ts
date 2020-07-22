import { Request, Response } from "express";
import MessageService from "../services/messageService";
import UserService from "../services/userService";

class Controller {
  service: MessageService | UserService;
  constructor(service: MessageService | UserService) {
    this.service = service;
    this.getAll = this.getAll.bind(this);
    this.getOne = this.getOne.bind(this);
    this.insert = this.insert.bind(this);
    this.update = this.update.bind(this);
    this.delete = this.delete.bind(this);
  }

  async getAll(req: Request, res: Response) {
    const response = await this.service.getAll();
    return res.status(response.statusCode).send(response);
  }

  async getOne(req: Request, res: Response) {
    const { id } = req.params;

    const response = await this.service.getOne({ id });

    return res.status(response.statusCode).send(response);
  }

  async insert(req: Request, res: Response) {
    const response = await this.service.insert(req.body);
    if (response.error) return res.status(response.statusCode).send(response);
    return res.status(201).send(response);
  }

  async update(req: Request, res: Response) {
    const { id } = req.params;

    const response = await this.service.update({ id }, req.body);

    return res.status(response.statusCode).send(response);
  }

  async delete(req: Request, res: Response) {
    const { id } = req.params;

    const response = await this.service.delete({ id });

    return res.status(response.statusCode).send(response);
  }
}

export default Controller;
