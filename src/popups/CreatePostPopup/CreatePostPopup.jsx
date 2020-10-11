import React, { Fragment } from "react";
import s from "./CreatePostPopup.module.scss";
import Popup from "../Popup/Popup";
import CreatePostForm from "forms/CreatePostForm/CreatePostForm";
import services from "services";
import { load } from "helpers/localStorage";

const CreatePostPopup = ({ onClose, setAlert }) => {
	const handleAddPost = (values) => {
		console.log("tests");
		const authorEmail = load("currentUser").email;
		services.postsServices
			.addPost({ ...values, author_email: authorEmail })
			.then(() => {
				onClose();
				setAlert({
					type: "success",
					message:
						"Your post has been submitted for review, if it meets our rules - it will be published.Thanks!"
				});
			})
			.catch(() => {
				onClose();
				setAlert({ type: "error", message: "Something went wrong. Please, try again later." });
			});
	};
	return (
		<Fragment>
			<Popup
				className={s.createPostPopup}
				title="Create a post"
				description="create a your future post"
				onClose={onClose}
			>
				<CreatePostForm onClose={onClose} onSubmit={handleAddPost} />
			</Popup>
		</Fragment>
	);
};
export default CreatePostPopup;
