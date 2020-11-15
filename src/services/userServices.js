import axios from "../axios";
import { save } from "helpers/localStorage";

export default {
  registration: async (params) => {
    try {
      const result = await axios.post("/registration", params);
      return result;
    } catch (error) {
      throw error;
    }
  },
  authorization: async (params) => {
    try {
      const result = await axios.post("/login", params);
      if (result.status === 200) {
        axios.defaults.headers["Authorization"] = result.data.access_token;
      }
      save("accessToken", result.data.access_token);
      return result;
    } catch (error) {
      throw error;
    }
  },
  getUser: async (id) => {
    try {
      return await axios.get(`/users/${id}`);
    } catch (error) {
      throw error;
    }
  },
  searchUsers: async (query) => {
    try {
      return await axios.get(`/users?email=${query}`);
    } catch (error) {
      throw error;
    }
  },
  getOnlineUsers: async () => {
    try {
      return await axios.get("/online-users");
    } catch (error) {
      throw error;
    }
  },
};
