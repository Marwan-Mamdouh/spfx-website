import PnPService from "../../../shared/services/pnp/PnPService";
import { IUserInfo } from "../models/IUserInfo";

export class HeroService {
	public static async getCurrentUser(): Promise<IUserInfo> {
		const user = await PnPService.sp.web.currentUser();

		return {
			displayName: user.Title,
			email: user.Email,
		};
	}
}
