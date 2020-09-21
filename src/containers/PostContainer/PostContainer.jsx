import React, { useState, useEffect, Fragment } from "react";
import s from "./PostContainer.module.scss";
import { Typography, Link } from "@material-ui/core";
import moment from "moment";
import Avatar from "components/Avatar/Avatar";
import services from "services";
import { useParams, useHistory } from "react-router-dom";
import { CircularProgress } from "@material-ui/core";
import Button from "components/Button/Button";

const PostContainer = () => {
	const [ data, setData ] = useState(null);
	const [ loading, setLoading ] = useState(false);
	const [ error, setError ] = useState(null);
	const params = useParams();
	const history = useHistory();
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
		<main className={s.postPage}>
			{data && (
				<Fragment>
					<Typography className={s.date} variant="caption">
						{moment(data.created_at).fromNow()}
					</Typography>
					<Typography className={s.title} variant="h4">
						{data.title}
					</Typography>
					<Typography className={s.description} variant="body1">
						{data.description}
					</Typography>
					<Typography className={s.content} variant="body1">
						{data.content}
					</Typography>
					{data.links.length > 0 && (
						<div className={s.linksWrap}>
							<Typography className={s.subtitle} variant="h6">
								Links:
							</Typography>
							<ul className={s.links}>
								{data.links.map((link) => (
									<li className={s.link} key={link._id}>
										<Link href={link.path} target="_blank" rel="noopener noreferrer">
											{link.title}
										</Link>
									</li>
								))}
							</ul>
						</div>
					)}
					<div className={s.authorWrap}>
						<Typography className={s.subtitle} variant="h6">
							Author:
						</Typography>
						<div className={s.authorInlineWrap}>
							<Avatar
								avatar={{
									index: data.author.avatarIndex,
									name: data.author.name
								}}
								size="normal"
							/>
							<div className={s.authorData}>
								<Typography className={s.authorName} variant="subtitle1">
									{data.author.name}
								</Typography>
								<Typography className={s.authorEmail} variant="subtitle1">
									{data.author.email}
								</Typography>
							</div>
						</div>
					</div>
				</Fragment>
			)}
			{loading && (
				<div className="loaderWrap justifyCenter alignCenter">
					<CircularProgress />
				</div>
			)}
			{error === 404 && (
				<div className={s.notFoundPost}>
					<span className={s.smile} role="img" aria-label="smile">
						😔
					</span>
					<Typography variant="h3" className={s.title}>
						Ooups, post not found
					</Typography>
					<Typography className={s.description} variant="subtitle1">
						This post is out of date, has been removed, or did not exist at all time
					</Typography>
					<Button variant="contained" color="primary" className={s.backBtn} onClick={() => history.push("/")}>
						Back to homepage
					</Button>
				</div>
			)}
		</main>
	);
};
export default PostContainer;
