import React from "react";
import LoginPage from "pages/LoginPage/LoginPage";
import RegistrationPage from "pages/RegistrationPage/RegistrationPage";
import ProfilePage from "pages/ProfilePage/ProfilePage";
import NotFoundPage from "pages/NotFoundPage/NotFoundPage";

export const routes = [
	{
		component: <LoginPage />,
		path: "/login"
	},
	{
		component: <RegistrationPage />,
		path: "/registration"
	},
	{
		component: <ProfilePage />,
		path: "/profile"
	},
	{
		component: <NotFoundPage />,
		path: "*"
	}
];
