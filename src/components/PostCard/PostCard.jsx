import React from "react";
import s from "./PostCard.module.scss";
import PropTypes from "prop-types";
import { Card, CardContent, Typography, CardActions, Button } from "@material-ui/core";
import Avatar from "components/Avatar/Avatar";
import { Link } from "react-router-dom";
import moment from "moment";

const PostCard = ({ data, onRead, withTitleLink }) => {
	const { _id, title, description, author, created_at } = data;
	return (
		<Card className={s.postCard}>
			<CardContent>
				<header className={s.header}>
					{withTitleLink ? (
						<Link to={`/posts/${_id}`} target="_blank" className={s.titleLink}>
							<Typography className={s.title} variant="h5" component="h2">
								{title}
							</Typography>
						</Link>
					) : (
						<Typography className={s.title} variant="h5" component="h2">
							{title}
						</Typography>
					)}
					<Avatar avatar={{ index: author.avatarIndex, name: author.name }} />
				</header>

				<Typography variant="body2" component="p">
					{description}
				</Typography>
			</CardContent>
			<CardActions>
				<Button size="small" onClick={() => onRead(data)} className={s.readBtn}>
					Read More
				</Button>
			</CardActions>
			<Typography variant="caption" className={s.date}>
				{moment(created_at).fromNow()}
			</Typography>
		</Card>
	);
};
PostCard.propTypes = {
	onRead: PropTypes.func,
	withTitleLink: PropTypes.bool
};
PostCard.defaultProps = {
	onRead: () => {},
	withTitleLink: true
};
export default PostCard;
