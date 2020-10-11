import React, { useState, useEffect } from "react";
import s from "./RequestsPostsPage.module.scss";
import MainLayout from "layouts/MainLayout/MainLayout";
import PostCard from "components/PostCard/PostCard";
import { Container, Typography, Grid, CircularProgress } from "@material-ui/core";
import services from "services";
import ViewPostPopup from "popups/ViewPostPopup/ViewPostPopup";

const RequestsPostsPage = () => {
	const [ requestsPosts, setRequestsPosts ] = useState([]);
	const [ loading, setLoading ] = useState(true);
	const [ viewPostPopup, setViewPostPopup ] = useState(false);
	const [ currentPost, setCurrentPost ] = useState(null);
	console.log(currentPost);
	useEffect(() => {
		services.postsServices.getRequestsPosts().then((res) => {
			setRequestsPosts(res.data);
			setLoading(false);
		});
	}, []);
	return (
		<MainLayout>
			<Container>
				{!loading ? (
					<div className={s.requestsPostsWrap}>
						<Typography variant="h4">Requests posts</Typography>
						<Grid container component="ul" spacing={2} className={s.requestsPosts}>
							{requestsPosts.map((post) => (
								<Grid item component="li" xs={6} key={post._id}>
									<PostCard
										data={post}
										onRead={(e) => {
											setCurrentPost(e);
											setViewPostPopup(true);
										}}
										withTitleLink={false}
									/>
								</Grid>
							))}
						</Grid>
					</div>
				) : (
					<div className="loaderWrap justifyCenter alignCenter">
						<CircularProgress />
					</div>
				)}
			</Container>
			{viewPostPopup &&
			currentPost && <ViewPostPopup onClose={() => setViewPostPopup(false)} data={currentPost} />}
		</MainLayout>
	);
};
export default RequestsPostsPage;
