import PnpService from "../../../shared/services/pnp/PnPService";
import {
	IAppIconProps,
	IQuickLinksItem,
} from "../components/quickLinks/ILinkProps";
import "@pnp/sp/lists";

export class QuickLinksService {
	public static async getLinks(): Promise<IAppIconProps[]> {
		const links = await PnpService.sp.web.lists
			.getByTitle("QuickLinks")
			.items.select("Title", "Icon", "URL", "Order0", "isActive")
			.filter("isActive eq 1")
			.orderBy("Order0")
			.top(10)
			.skip(0)();
		return this.mapLinks(links);
	}

	private static mapLinks(links: IQuickLinksItem[]): IAppIconProps[] {
		return links.map((link) => ({
			title: link.Title,
			icon: link.Icon,
			url: link.URL.Url,
			order: link.Order0,
			isActive: link.isActive,
		}));
	}
}
