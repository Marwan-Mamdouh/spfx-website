import React, { ReactElement, useEffect, useState } from "react";
import styles from "./QuickLinks.module.scss";
import type { IQuickLinksProps } from "./IQuickLinksProps";
import { IAppIconProps } from "../appIcon/ILinkProps";
import { QuickLinksService } from "../../service/QuickLinksService";
import LoadingSpinner from "../../../../shared/components/loadingSpinner/LoadingSpinner";
import AppIcon from "../appIcon/AppIcon";

const QuickLinks = (): ReactElement<IQuickLinksProps> => {
	const [links, setLinks] = useState<IAppIconProps[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [error, setError] = useState<boolean>(false);

	useEffect(() => {
		let isMounted = true;

		((): void => {
			try {
				QuickLinksService.getLinks()
					.then((lnks) => {
						if (isMounted) setLinks(lnks);
					})
					.catch((e) => {
						if (isMounted) {
							setError(true);
							console.error(e);
						}
					});
			} finally {
				if (isMounted) setIsLoading(false);
			}
		})();
		return () => {
			isMounted = false;
		};
	}, []);

	if (isLoading) {
		return <LoadingSpinner message="loading links..." />;
	}

	if (error) {
		// return <ErrorMessage message={error} />;
	}

	if (!links.length) {
		return <div>no links came for the sharepoint list</div>;
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
