import React, { ReactElement, useEffect, useState } from "react";
import styles from "./QuickLinks.module.scss";
import type { IQuickLinksProps } from "./IQuickLinksProps";
import { IAppIconProps } from "../appIcon/ILinkProps";
import { QuickLinksService } from "../../service/QuickLinksService";
import LoadingSpinner from "../../../../shared/components/LoadingSpinner ";
import AppIcon from "../appIcon/AppIcon";

const QuickLinks = (): ReactElement<IQuickLinksProps> => {
	const [links, setLinks] = useState<IAppIconProps[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(true);

	useEffect(() => {
		QuickLinksService.getLinks()
			.then((lnks) => {
				setLinks(lnks);
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
		<section className={`${styles.quickLinks}`}>
			{links.map((link: IAppIconProps) => (
				<AppIcon {...link} key={link.order} />
			))}
		</section>
	);
};

export default QuickLinks;
