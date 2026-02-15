import React, { ReactElement } from "react";
import styles from "./Hero.module.scss";
import type { IHeroProps } from "./IHeroProps";
import { escape } from "@microsoft/sp-lodash-subset";

const Hero = (props: IHeroProps): ReactElement<IHeroProps> => {
	const { userDisplayName, welcomeMessageFieldLabel } = props;

	return (
		<section className={`${styles.hero}`}>
			<h2>
				{welcomeMessageFieldLabel ?? "Welcome"},{" "}
				<span>{escape(userDisplayName)}!</span>
			</h2>
		</section>
	);
};

export default Hero;
