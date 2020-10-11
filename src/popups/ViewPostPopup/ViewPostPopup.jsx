import React from "react";
import s from "./ViewPostPopup.module.scss";
import Popup from "../Popup/Popup";
import DropListTrigger from "components/DropListTrigger/DropListTrigger";
import PostContainer from "containers/PostContainer/PostContainer";
import { Container } from "@material-ui/core";

const droplistData = [
	{
		title: "Approve",
		onClick: () => {}
	},
	{
		title: "Reject",
		onClick: () => {}
	}
];
const ViewPostPopup = ({ onClose, data }) => {
	return (
		<Popup title="View post" onClose={onClose} className={s.viewPostPopup}>
			<Container style={{ display: "flex", flexDirection: "column" }}>
				<PostContainer data={data} />
			</Container>
			<DropListTrigger data={droplistData} className={s.dropListTrigger} />
		</Popup>
	);
};
export default ViewPostPopup;
