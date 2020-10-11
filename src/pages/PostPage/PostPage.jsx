import React, { useState, useEffect } from "react";
import MainLayout from "layouts/MainLayout/MainLayout";
import { Container } from "@material-ui/core";
import PostContainer from "containers/PostContainer/PostContainer";
import services from "services";
import { useParams } from "react-router-dom";

const PostPage = () => {
	const [ data, setData ] = useState(null);
	const [ loading, setLoading ] = useState(false);
	const [ error, setError ] = useState(null);
	const params = useParams();
	useEffect(
		() => {
			setLoading(true);
			services.postsServices
				.getPost(params.id)
				.then(({ data }) => {
					setData(data);
					setLoading(false);
				})
				.catch((error) => {
					setError(error.response.status);
					setLoading(false);
				});
		},
		[ params.id ]
	);
	return (
		<MainLayout>
			<Container style={{ display: "flex", flexDirection: "column" }}>
				<PostContainer data={data} loading={loading} error={error} />
			</Container>
		</MainLayout>
	);
};
export default PostPage;
