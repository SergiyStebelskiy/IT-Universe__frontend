import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { StylesProvider } from "@material-ui/core/styles";
import { routes } from "routes";
import "uiKit/main.scss";

const App = () => {
	return (
		<StylesProvider>
			<Router>
				<Switch>
					{routes.map(({ component, path }, index) => (
						<Route path={path} key={index}>
							{component}
						</Route>
					))}
				</Switch>
			</Router>
		</StylesProvider>
	);
};

export default App;
