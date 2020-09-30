import { SET_USER, LOGOUT } from "helpers/constants";
import { remove } from "helpers/localStorage";

export const setUser = (user) => {
	return async (dispatch) => {
		dispatch({
			type: SET_USER,
			payload: user
		});
	};
};

export const logout = () => {
	return async (dispatch) => {
		dispatch({
			type: LOGOUT
		});
		remove("accessToken");
		remove("currentUser");
	};
};
