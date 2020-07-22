import makeRequest from "../helpers/makeRequest";
import { Method } from "../types/requestMethodType";

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
}

export default new UserService();
