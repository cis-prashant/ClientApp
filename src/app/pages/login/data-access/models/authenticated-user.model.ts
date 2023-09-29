export class AuthenticatedUserModel {
	public roleId: number;
	public permissions: string[];

	constructor(roleId: number, permissions: string[]) {
		this.roleId = roleId;
		this.permissions = permissions;
	}
}
