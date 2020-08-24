import { LOGIN, LOGOUT } from "helpers/constants";
import { load } from "helpers/localStorage";
import {GUEST} from "helpers/userRoles"

const savedUser = load("currentUser");

let initialState = {
	type: GUEST,
	_id: "",
	name: "",
	email: "",
	avatarIndex: null
};

if (savedUser) {
	initialState = savedUser;
}

const user = (state = initialState, action) => {
	const { type, payload } = action;
	switch (type) {
		case LOGIN: {
			return payload;
		}
		case LOGOUT: {
			return {
				type: GUEST,
				_id: "",
				name: "",
				email: "",
				avatarIndex: null
			};
		}
		default: {
			return state;
		}
	}
};

export default user;
