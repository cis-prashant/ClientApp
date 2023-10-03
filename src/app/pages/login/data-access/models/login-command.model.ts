export class LoginCommandModel {
	public password: string;
	public email: string;

	constructor(email = '', password = '') {
		this.password = password;
		this.email = email;
	}
}
