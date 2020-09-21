import React, { useState, useEffect } from "react";
import UserAvatar from "@material-ui/core/Avatar";
import s from "./Avatar.module.scss";
import classNames from "classnames";
import { defaultAvatars } from "helpers/defaultAvatars";

const Avatar = (props) => {
	const { size, avatar, className } = props;
	const [ avatarData, setAvatarData ] = useState(null);
	useEffect(
		() => {
			setAvatarData(avatar);
		},
		[ avatar ]
	);
	const getGradient = () => {
		if (avatarData) {
			return defaultAvatars.filter((gradient) => gradient.index === avatarData.index)[0]?.gradient;
		}
		return "";
	};
	return (
		<UserAvatar
			{...props}
			alt={avatarData && avatarData.name.toUpperCase()}
			src="null"
			className={classNames(s.avatar, { [s.large]: size === "large", [s.normal]: size === "normal" }, className)}
			style={{ backgroundImage: getGradient() }}
		/>
	);
};

export default Avatar;
