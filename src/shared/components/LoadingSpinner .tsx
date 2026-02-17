import React from "react";
import styles from "./LoadingSpinner.module.scss";

const LoadingSpinner = (): JSX.Element => {
	return (
		<div className={styles.container}>
			<div className={styles.loader} />
		</div>
	);
};

export default LoadingSpinner;
