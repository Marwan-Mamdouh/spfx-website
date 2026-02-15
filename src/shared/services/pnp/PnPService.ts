import { SPFI, spfi } from "@pnp/sp";
import { SPFx } from "@pnp/sp/presets/all";
// import "@pnp/sp/webs";
// import "@pnp/sp/lists";
// import "@pnp/sp/items";
import { WebPartContext } from "@microsoft/sp-webpart-base";

class PnpService {
	private static _sp: SPFI | undefined;
	public static initialize(ctx: WebPartContext): void {
		if (!this._sp) {
			this._sp = spfi().using(SPFx(ctx));
		}
	}

	public static get sp(): SPFI {
		if (!this._sp) {
			throw new Error(
				"PnPService has not been initialized. Call PnpService.initialize(context) before using the service.",
			);
		}
		return this._sp;
	}
}

export default PnpService;
