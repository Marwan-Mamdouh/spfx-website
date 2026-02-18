import React from "react";
import { Icon } from "@fluentui/react/lib/Icon";
import styles from "./ErrorMessage.module.scss";
import { IErrorMessageProps } from "./IErrorMessageProps";

const ErrorMessage = ({
	message,
	onRetry,
}: IErrorMessageProps): JSX.Element => {
	return (
		<div className={styles.container}>
			<Icon iconName="ErrorBadge" className={styles.icon} />
			<p className={styles.message}>{message}</p>

			{onRetry && (
				<button className={styles.retryButton} onClick={onRetry}>
					Retry
				</button>
			)}
		</div>
	);
};

export default ErrorMessage;
