import React, { ReactElement, useEffect, useState } from "react";
import styles from "./Hero.module.scss";
import type { IHeroProps } from "./IHeroProps";
import { escape } from "@microsoft/sp-lodash-subset";
import { HeroService } from "../../services/HeroService";
import LoadingSpinner from "../../../../shared/components/LoadingSpinner ";

const Hero = (props: IHeroProps): ReactElement<IHeroProps> => {
	const { welcomeMessageFieldLabel } = props;

	const [userDisplayName, setUserDisplayName] = useState<string>("");
	const [isLoading, setIsLoading] = useState<boolean>(true);

	useEffect(() => {
		HeroService.getCurrentUser()
			.then((username) => {
				setUserDisplayName(username.displayName);
			})
			.catch((e) => {
				console.error(e);
			});
		setIsLoading(false);
	}, []);

	if (isLoading) {
		return <LoadingSpinner />;
	}

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
