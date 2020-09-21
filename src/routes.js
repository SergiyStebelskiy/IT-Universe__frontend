import { GUEST, USER } from "helpers/userRoles";
import LoginPage from "pages/LoginPage/LoginPage";
import RegistrationPage from "pages/RegistrationPage/RegistrationPage";
import ProfilePage from "pages/ProfilePage/ProfilePage";
import HomePage from "pages/HomePage/HomePage";
import PostPage from "pages/PostPage/PostPage";

const allTypes = `${GUEST}, ${USER}`;
const authorized = `${USER}`;

const routes = [
	{
		Component: HomePage,
		path: "/",
		allowed: allTypes,
		exact: true
	},
	{
		Component: LoginPage,
		path: "/login",
		allowed: GUEST
	},
	{
		Component: RegistrationPage,
		path: "/registration",
		allowed: GUEST
	},
	{
		Component: ProfilePage,
		path: "/profile",
		allowed: authorized
	},
	{
		Component: PostPage,
		path: "/posts/:id",
		allowed: allTypes
	}
];
export default routes;
