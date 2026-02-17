export interface IAppIconProps {
	title: string;
	icon: string;
	url: string;
	order: number;
	isActive: boolean;
}

export interface URL {
	Description: string;
	Url: string;
}

export interface IQuickLinksItem {
	Title: string;
	Icon: string;
	URL: URL;
	Order0: number;
	isActive: boolean;
}
