import { messageModel, userModel } from "../models";

class Service {
  model: typeof messageModel | typeof userModel;
  constructor(model: typeof messageModel | typeof userModel) {
    this.model = model;
    this.getAll = this.getAll.bind(this);
    this.getOne = this.getOne.bind(this);
    this.insert = this.insert.bind(this);
    this.update = this.update.bind(this);
    this.delete = this.delete.bind(this);
  }

  async getAll(where?: any) {
    try {
      if (!where) where = {};
      const items = await this.model.getAll(where);
      return {
        error: false,
        data: items,
        statusCode: 200,
      };
    } catch (error) {
      return {
        error: true,
        message: error.message,
        statusCode: 500,
      };
    }
  }

  async getOne(where: any) {
    try {
      const item = await this.model.getOne(where);
      if (!item)
        return {
          error: true,
          statusCode: 404,
          message: "item not found",
        };
      return {
        error: false,
        statusCode: 200,
        data: item,
      };
    } catch (error) {
      return {
        error: true,
        statusCode: 500,
        message: error.message,
      };
    }
  }

  async insert(data: any) {
    try {
      let item = await this.model.create(data);
      if (item)
        return {
          error: false,
          statusCode: 201,
          data: item,
        };
      else {
        return {
          error: true,
          statusCode: 400,
          message: "Wrong data",
        };
      }
    } catch (error) {
      return {
        error: true,
        statusCode: 500,
        message: error.message,
      };
    }
  }

  async update(where: any, data: any) {
    try {
      let item = await this.model.update(where, data);
      return {
        error: false,
        statusCode: 202,
        data: item,
      };
    } catch (error) {
      return {
        error: true,
        statusCode: 500,
        message: error.message,
      };
    }
  }

  async delete(where: any) {
    try {
      let item = await this.model.delete(where);
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
}

export default Service;
