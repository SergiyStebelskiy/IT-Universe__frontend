import React from "react";
import MainLayout from "layouts/MainLayout/MainLayout";
import { Container } from "@material-ui/core";
import PostContainer from "containers/PostContainer/PostContainer";

const PostPage = () => {
	return (
		<MainLayout>
			<Container style={{ display: "flex", flexDirection: "column" }}>
				<PostContainer />
			</Container>
		</MainLayout>
	);
};
export default PostPage;
