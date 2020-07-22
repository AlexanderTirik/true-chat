import Service from "./service";
import jwt from "jsonwebtoken";
import { userModel, messageModel as msgModel } from "../models";
import { ACCESS_TOKEN_SECRET } from "../config/defaultUserSettings";

class UserService extends Service {
  messageModel: typeof msgModel;
  model: typeof userModel;
  constructor(model: typeof userModel, messageModel: typeof msgModel) {
    super(model);
    this.model = model;
    this.messageModel = messageModel;
    this.delete = this.delete.bind(this);
  }
  async delete(where: { id: string }) {
    try {
      let item = await this.model.delete(where);
      const userId = where.id;
      const userMessages = this.messageModel.getAll({ userId });
      userMessages.forEach((message) => {
        this.messageModel.delete({ id: message.id });
      });
      if (!item)
        return {
          error: true,
          statusCode: 404,
          message: "item not found",
        };

      return {
        error: false,
        deleted: true,
        statusCode: 202,
        message: item,
      };
    } catch (error) {
      return {
        error: true,
        statusCode: 500,
        message: error.message,
      };
    }
  }

  async login({ username, password }: { username: string; password: string }) {
    const dbUser = this.model.getOne({ user: username });

    if (!dbUser) {
      return {
        error: true,
        statusCode: 404,
        message: "User not found",
      };
    }
    if (dbUser.password == password) {
      const user = {
        user: dbUser.user,
        role: dbUser.role,
        id: dbUser.id,
        avatar: dbUser.avatar,
      };
      const accessToken = jwt.sign(user, ACCESS_TOKEN_SECRET);
      return {
        error: false,
        statusCode: 200,
        accessToken,
        data: {
          id: user.id,
          role: user.role,
        },
      };
    } else {
      return {
        error: true,
        statusCode: 401,
        message: "Bad password",
      };
    }
  }
}

export default UserService;
