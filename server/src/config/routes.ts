import { Express } from "express";
import MessageController from "../controllers/messageController";
import UserController from "../controllers/userController";
import { authentificateToken, authentificateAdminToken } from "../middlewares";

export default (server: Express) => {
  server.get(`/api/messages`, authentificateToken, MessageController.getAll);
  server.get(
    `/api/messages/:id`,
    authentificateToken,
    MessageController.getOne
  );
  server.post(`/api/messages`, authentificateToken, MessageController.insert);
  server.put(
    `/api/messages/:id`,
    authentificateToken,
    MessageController.update
  );
  server.delete(
    `/api/messages/:id`,
    authentificateToken,
    MessageController.delete
  );

  server.get(`/api/users`, authentificateAdminToken, UserController.getAll);
  server.get(`/api/users/:id`, authentificateAdminToken, UserController.getOne);
  server.post(`/api/users`, authentificateAdminToken, UserController.insert);
  server.put(`/api/users/:id`, authentificateAdminToken, UserController.update);
  server.delete(
    `/api/users/:id`,
    authentificateAdminToken,
    UserController.delete
  );
  server.post(`/login`, UserController.login);
};
