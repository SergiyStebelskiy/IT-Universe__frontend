import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { StylesProvider } from "@material-ui/core/styles";
import routes from "./routes";
import "uiKit/main.scss";
import { Provider } from "react-redux";
import store from "./store";
import RouteWithSubRoutes from "helpers/RouteWithSubRoutes";
import NotFoundPage from "pages/NotFoundPage/NotFoundPage";

ReactDOM.render(
	<Provider store={store}>
		<StylesProvider>
			<Router>
				<Switch>
					{routes.map(({ Component, path, allowed, exact }, i) => (
						<RouteWithSubRoutes path={path} allowed={allowed} exact={exact} Component={Component} key={i} />
					))}
					<Route path="*" component={NotFoundPage} />
				</Switch>
			</Router>
		</StylesProvider>
	</Provider>,
	document.getElementById("root")
);
