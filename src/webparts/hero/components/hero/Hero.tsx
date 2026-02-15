import * as React from "react";
import styles from "./Hero.module.scss";
import type { IHeroProps } from "./IHeroProps";
import { escape } from "@microsoft/sp-lodash-subset";

export default class Hero extends React.Component<IHeroProps> {
	public render(): React.ReactElement<IHeroProps> {
		const { userDisplayName, welcomeMessageFieldLabel } = this.props;

		return (
			<section className={`${styles.hero}`}>
				<h2>
					{welcomeMessageFieldLabel ?? "Welcome"}, {escape(userDisplayName)}!
				</h2>
			</section>
		);
	}
}
