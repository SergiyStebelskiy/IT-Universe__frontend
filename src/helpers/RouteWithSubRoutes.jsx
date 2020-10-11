import React from "react";
import { Route, Redirect, withRouter } from "react-router-dom";
import { useSelector } from "react-redux";
import { ADMIN, GUEST, USER } from "helpers/userRoles";
const RouteWithSubRoutes = ({ allowed, exact, path, Component }) => {
	const user = useSelector((state) => state.user);
	if (!allowed.includes(user.type)) {
		switch (user.type) {
			case GUEST:
				return <Redirect to="/login" />;
			case USER:
				return <Redirect to="/profile" />;
			case ADMIN:
				return <Redirect to="/profile" />;
			default:
				return <Redirect to="/login" />;
		}
	}
	return <Route exact={exact} path={path} render={(props) => <Component {...props} />} />;
};

export default withRouter(RouteWithSubRoutes);
