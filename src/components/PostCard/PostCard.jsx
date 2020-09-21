import React from "react";
import s from "./PostCard.module.scss";
import { Card, CardContent, Typography, CardActions, Button } from "@material-ui/core";
import Avatar from "components/Avatar/Avatar";
import { Link } from "react-router-dom";
import moment from "moment";
import { useHistory } from "react-router-dom";

const PostCard = ({ data }) => {
	const { _id, title, description, author, created_at } = data;
	const history = useHistory();
	return (
		<Card className={s.postCard}>
			<CardContent>
				<header className={s.header}>
					<Link to={`/posts/${_id}`} className={s.titleLink}>
						<Typography className={s.title} variant="h5" component="h2">
							{title}
						</Typography>
					</Link>
					<Avatar avatar={{ index: author.avatarIndex, name: author.name }} />
				</header>

				<Typography variant="body2" component="p">
					{description}
				</Typography>
			</CardContent>
			<CardActions>
				<Button size="small" onClick={() => history.push(`/posts/${_id}`)}>
					Learn More
				</Button>
			</CardActions>
			<Typography variant="caption" className={s.date}>
				{moment(created_at).fromNow()}
			</Typography>
		</Card>
	);
};

export default PostCard;
