import makeRequest from "../helpers/makeRequest";
import { Method } from "../types/requestMethodType";
import IUser from "../types/userType";

class UserService {
  async getUsers() {
    try {
      const apiUrl = "http://127.0.0.1:3001/api/users";
      const response = await makeRequest(Method.GET, apiUrl);
      const rsp = await response.json();
      const users = rsp.data;

      return users;
    } catch (error) {
      throw error;
    }
  }
  async getUser(
    userId: string
  ): Promise<{
    error: boolean;
    statusCode: number;
    data?: IUser;
    message?: string;
  }> {
    try {
      const apiUrl = `http://127.0.0.1:3001/api/users/${userId}`;
      const response = await makeRequest(Method.GET, apiUrl);
      const rsp = await response.json();
      return rsp;
    } catch (error) {
      throw error;
    }
  }
  async editUser(
    userId: string,
    editUserProps: {
      avatar?: string;
      user?: string;
      password?: string;
      role?: string;
    }
  ) {
    try {
      const apiUrl = `http://127.0.0.1:3001/api/users/${userId}`;
      const response = await makeRequest(Method.PUT, apiUrl, editUserProps);
      const rsp = await response.json();
      return rsp;
    } catch (error) {
      throw error;
    }
  }
}

export default new UserService();
