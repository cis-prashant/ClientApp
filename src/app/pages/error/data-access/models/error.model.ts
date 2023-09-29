export class ErrorModel {
	public type?: number;
	public description?: string;

	constructor(type?: number, description?: string) {
		this.type = type;
		this.description = description;
	}
}
