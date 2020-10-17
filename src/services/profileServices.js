import axios from "../axios";

export default {
  getSelf: async () => {
    try {
      return await axios.get("/self");
    } catch (error) {
      throw error;
    }
  },
};
