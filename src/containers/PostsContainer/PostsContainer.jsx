import React, { useEffect, useState } from "react";
import s from "./PostsContainer.module.scss";
import { Container, Typography, Grid, CircularProgress } from "@material-ui/core";
import PostCard from "components/PostCard/PostCard";
import services from "services";
import { useHistory } from "react-router-dom";

const PostsContainer = () => {
	const [ posts, setPosts ] = useState([]);
	const [ loading, setLoading ] = useState(false);
	const history = useHistory();

	useEffect(() => {
		setLoading(true);
		services.postsServices.getPosts().then(({ data }) => {
			setPosts(data);
			setLoading(false);
		});
	}, []);
	return (
		<Container>
			<section className={s.postsWrap}>
				<Typography className={s.title} variant="h4">
					Posts
				</Typography>
				{!loading ? (
					<Grid container component="ul" spacing={2}>
						{posts.map((post) => (
							<Grid item component="li" xs={6} key={post._id}>
								<PostCard data={post} onRead={(e) => history.push(`/posts/${e._id}`)} />
							</Grid>
						))}
					</Grid>
				) : (
					<div className="loaderWrap justifyCenter">
						<CircularProgress />
					</div>
				)}
			</section>
		</Container>
	);
};
export default PostsContainer;
