import React from "react";
import classNames from "classnames";
import s from "./Popup.module.scss";
import { Typography } from "@material-ui/core";
import { Close } from "@material-ui/icons";
import Button from "components/Button/Button";

const Popup = ({ title, description, children, onClose, onSubmit, dialog, className }) => {
	return (
		<div className={classNames(s.popupWrap, className)}>
			<div className={s.popup}>
				<Typography className={s.title} variant="h5">
					{title}
				</Typography>
				<Typography className={s.description} variant="body1">
					{description}
				</Typography>
				{children}
				{dialog && (
					<div className="popupBtns">
						<Button onClick={onClose} className="btn" variant="outlined" size="small">
							Cancel
						</Button>
						<Button onClick={onSubmit} className="btn" variant="contained" color="primary" size="small">
							Save
						</Button>
					</div>
				)}
				<Close onClick={onClose} className={s.closeIcon} />
			</div>
		</div>
	);
};
export default Popup;
