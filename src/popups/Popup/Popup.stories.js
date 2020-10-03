import React from "react";
import { action } from "@storybook/addon-actions";
import Popup from "./Popup";
import AddProjectForm from "components/forms/AddProjectForm/AddProjectForm";

export default {
	title: "popups/Popup",
	component: Popup
};

export const dialogPopup = () => (
	<Popup dialog title="Delete project" text="Are you sure you want to delete this project?" isDelete />
);

export const addProjectPopup = () => (
	<Popup title="Add project" text="Please, complete the following fields to add a new project">
		<AddProjectForm />
	</Popup>
);
