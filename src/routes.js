import { GUEST, USER, ADMIN } from "helpers/userRoles";
import LoginPage from "pages/LoginPage/LoginPage";
import RegistrationPage from "pages/RegistrationPage/RegistrationPage";
import ProfilePage from "pages/ProfilePage/ProfilePage";
import HomePage from "pages/HomePage/HomePage";
import PostPage from "pages/PostPage/PostPage";
import RequestsPostsPage from "pages/RequestsPostsPage/RequestsPostsPage";
import UserPage from "pages/UserPage/UserPage";
import ChatPage from "pages/ChatPage/ChatPage";

const allTypes = `${GUEST}, ${USER}, ${ADMIN}`;
const authorized = `${USER}, ${ADMIN}`;

const routes = [
  {
    Component: HomePage,
    path: "/",
    allowed: allTypes,
    exact: true,
  },
  {
    Component: LoginPage,
    path: "/login",
    allowed: GUEST,
  },
  {
    Component: RegistrationPage,
    path: "/registration",
    allowed: GUEST,
  },
  {
    Component: ProfilePage,
    path: "/profile",
    allowed: authorized,
  },
  {
    Component: PostPage,
    path: "/posts/:id",
    allowed: allTypes,
  },
  {
    Component: RequestsPostsPage,
    path: "/requests-posts",
    allowed: ADMIN,
  },
  {
    Component: UserPage,
    path: "/users/:id",
    allowed: allTypes,
  },
  {
    Component: ChatPage,
    path: "/chats/:id?",
    allowed: authorized,
  },
];
export default routes;
