import React, { useState, useEffect } from "react";
import s from "./RequestsPostsPage.module.scss";
import MainLayout from "layouts/MainLayout/MainLayout";
import PostCard from "components/PostCard/PostCard";
import { Container, Typography, Grid, CircularProgress } from "@material-ui/core";
import services from "services";
import ViewPostPopup from "popups/ViewPostPopup/ViewPostPopup";
import NotificationBox from "components/NotificationBox/NotificationBox";

const RequestsPostsPage = () => {
	const [ requestsPosts, setRequestsPosts ] = useState([]);
	const [ loading, setLoading ] = useState(true);
	const [ viewPostPopup, setViewPostPopup ] = useState(false);
	const [ currentPost, setCurrentPost ] = useState(null);
	const [ alert, setAlert ] = useState({ type: "", message: "" });

	console.log(currentPost);
	useEffect(() => {
		services.postsServices.getRequestsPosts().then((res) => {
			setRequestsPosts(res.data);
			setLoading(false);
		});
	}, []);

	const handleApprovePost = () => {
		services.postsServices
			.approvePost(currentPost._id)
			.then(() => {
				setViewPostPopup(false);
				setAlert({
					type: "success",
					message: "This post was approved!"
				});
			})
			.catch(() => {
				setViewPostPopup(false);
				setAlert({ type: "error", message: "Something went wrong. Please, try again later." });
			});
	};
	const handleRejectPost = () => {
		services.postsServices
			.rejectPost(currentPost._id)
			.then(() => {
				setViewPostPopup(false);
				setAlert({
					type: "success",
					message: "This post was rejected!"
				});
			})
			.catch(() => {
				setViewPostPopup(false);
				setAlert({ type: "error", message: "Something went wrong. Please, try again later." });
			});
	};
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
			currentPost && (
				<ViewPostPopup
					onClose={() => setViewPostPopup(false)}
					data={currentPost}
					onApprove={handleApprovePost}
					onReject={handleRejectPost}
				/>
			)}
			{alert.message.length > 0 && (
				<NotificationBox
					type={alert.type}
					message={alert.message}
					onClose={() => setAlert({ type: "", message: "" })}
				/>
			)}
		</MainLayout>
	);
};
export default RequestsPostsPage;
