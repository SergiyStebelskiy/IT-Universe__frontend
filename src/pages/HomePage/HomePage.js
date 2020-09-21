import React from "react";
import s from "./HomePage.module.scss";
import MainLayout from "layouts/MainLayout/MainLayout";
import Header from "./components/Header/Header";
import PostsContainer from "containers/PostsContainer/PostsContainer";

const Homepage = () => {
	return (
		<MainLayout className={s.homeLayout}>
			<Header />
			<PostsContainer />
		</MainLayout>
	);
};

export default Homepage;
