import React, { ReactElement, useEffect, useState } from "react";
import styles from "./Hero.module.scss";
import type { IHeroProps } from "./IHeroProps";
import { escape } from "@microsoft/sp-lodash-subset";
import { HeroService } from "../../services/HeroService";
import LoadingSpinner from "../../../../shared/components/loadingSpinner/LoadingSpinner";
import ErrorMessage from "../../../../shared/components/errorMessage/ErrorMessage";

const Hero = (props: IHeroProps): ReactElement<IHeroProps> => {
	const { welcomeMessageFieldLabel } = props;

	const [userDisplayName, setUserDisplayName] = useState<string>("");
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		let isMounted = true;
		HeroService.getCurrentUser()
			.then((username) => {
				if (isMounted) setUserDisplayName(username.displayName);
			})
			.catch((e) => {
				if (isMounted) {
					console.error(e);
					setError(e);
				}
			});
		setIsLoading(false);
		return () => {
			isMounted = false;
		};
	}, []);

	if (isLoading) {
		return <LoadingSpinner message="links are loading..." />;
	}

	if (error) return <ErrorMessage message={error} />;

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
