declare interface IHeroWebPartStrings {
	PropertyPaneDescription: string;
	BasicGroupName: string;
	DescriptionFieldLabel: string;
	AppLocalEnvironmentSharePoint: string;
	AppLocalEnvironmentTeams: string;
	AppLocalEnvironmentOffice: string;
	AppLocalEnvironmentOutlook: string;
	AppSharePointEnvironment: string;
	AppTeamsTabEnvironment: string;
	AppOfficeEnvironment: string;
	AppOutlookEnvironment: string;
	UnknownEnvironment: string;
	MessageFieldLabel: string;
}

declare module "HeroWebPartStrings" {
	const strings: IHeroWebPartStrings;
	export = strings;
}
