import { SET_USER, LOGOUT } from "helpers/constants";
import { load, save } from "helpers/localStorage";
import { GUEST, USER } from "helpers/userRoles";

const savedUser = load("currentUser");

let initialState = {
  type: GUEST,
  _id: "",
  name: "",
  email: "",
  avatarIndex: null,
  posts: [],
};
if (savedUser) {
  initialState = savedUser;
}

const user = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_USER: {
      save("currentUser", {
        type: USER,
        ...payload,
      });
      return payload;
    }
    case LOGOUT: {
      return {
        type: GUEST,
        _id: "",
        name: "",
        email: "",
        avatarIndex: null,
        posts: [],
        online: true,
      };
    }
    default: {
      return state;
    }
  }
};

export default user;
