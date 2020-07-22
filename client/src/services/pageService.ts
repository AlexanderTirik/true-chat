import makeRequest from "../helpers/makeRequest";
import { Method } from "../types/requestMethodType";

class PageService {
  async login({
    username,
    password,
  }: {
    username: string;
    password: string;
  }): Promise<{
    error: boolean;
    accessToken?: string;
    data?: {
      id: string;
    };
    statusCode: number;
    message?: string;
  }> {
    try {
      const apiUrl = "http://127.0.0.1:3001/login";
      const response = await makeRequest(Method.POST, apiUrl, {
        username,
        password,
      });
      const rsp = await response.json();
      if (rsp.accessToken) {
        localStorage.setItem("token", rsp.accessToken);
      }
      return rsp;
    } catch (error) {
      throw error;
    }
  }
}

export default new PageService();
