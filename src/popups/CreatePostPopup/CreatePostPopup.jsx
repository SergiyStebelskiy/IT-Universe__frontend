import React from "react";
import s from "./CreatePostPopup.module.scss";
import Popup from "../Popup/Popup";
import CreatePostForm from "forms/CreatePostForm/CreatePostForm";

const CreatePostPopup = ({ onClose }) => {
	return (
		<Popup
			className={s.createPostPopup}
			title="Create a post"
			description="create a your future post"
			onClose={onClose}
		>
			<CreatePostForm onClose={onClose} />
		</Popup>
	);
};
export default CreatePostPopup;
