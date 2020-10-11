import axios from "../axios";

export default {
	getPosts: async () => {
		try {
			return await axios.get("/posts");
		} catch (error) {
			throw error;
		}
	},
	getRequestsPosts: async () => {
		try {
			return await axios.get("/requests-posts");
		} catch (error) {
			throw error;
		}
	},
	getPost: async (id) => {
		try {
			return await axios.get(`/posts/${id}`);
		} catch (error) {
			throw error;
		}
	},
	addPost: async (params) => {
		try {
			return await axios.post("/posts", params);
		} catch (error) {
			throw error;
		}
	}
};
