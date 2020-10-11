import React, { useEffect } from "react";
import { Alert } from "@material-ui/lab";
import classNames from "classnames";
import s from "./NotificationBox.module.scss";

const alertTypes = [ "error", "warning", "info", "success" ];

const NotificationBox = ({ className, type, message, onClose = () => {}, disappearTime = 5 }) => {
	const alertType = alertTypes.filter((e) => e === type)[0] || "success";

	useEffect(
		() => {
			disappearTime && setTimeout(() => onClose(), disappearTime * 1000);
		},
		[ disappearTime, onClose ]
	);

	return (
		<div className={s.wrapper}>
			<Alert
				severity={alertType}
				className={classNames(s.alert, {
					[className]: className,
					[s.success]: alertType === "success"
				})}
				onClose={onClose}
			>
				{message}
			</Alert>
		</div>
	);
};

export default NotificationBox;
