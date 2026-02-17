import React from "react";
import styles from "./AppIcon.module.scss";
import { IAppIconProps } from "./ILinkProps";
import { Icon } from "@fluentui/react/lib/Icon";

const AppIcon = ({ ...link }: IAppIconProps): JSX.Element => {
	const { title, url, isActive, icon } = link;
	return (
		<a
			href={url}
			className={
				styles["app-icon-link"] + `${isActive ? styles["active-item"] : ""}`
			}
			aria-label={`Maps to ${title}`}
		>
			<div className={styles["icon-square"]}>
				<Icon iconName={icon ?? "Link"} />
			</div>

			<span className={styles["app-title"]}>{title}</span>
		</a>
	);
};

export default AppIcon;
