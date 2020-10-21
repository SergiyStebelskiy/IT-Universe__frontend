import axios from "../axios";

export default {
  createChat: async (params) => {
    try {
      return await axios.post(`/chats`, params);
    } catch (error) {
      throw error;
    }
  },
  getChat: async (id) => {
    try {
      return await axios.get(`/chats/${id}`);
    } catch (error) {
      throw error;
    }
  },
  getUserChats: async (id) => {
    try {
      return await axios.get(`/users/${id}/chats`);
    } catch (error) {
      throw error;
    }
  },
  addMessage: async (id, params) => {
    try {
      return await axios.post(`/chats/${id}`, params);
    } catch (error) {
      throw error;
    }
  },
};
