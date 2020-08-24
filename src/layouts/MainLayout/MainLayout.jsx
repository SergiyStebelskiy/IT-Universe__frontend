import React from "react";
import s from "./MainLayout.module.scss";
import classNames from "classnames";
import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";

const MainLayout = ({ children, className }) => {
	return (
		<div className={classNames(s.mainLayout, className)}>
			<Header />
			{children}
			<Footer />
		</div>
	);
};

export default MainLayout;
