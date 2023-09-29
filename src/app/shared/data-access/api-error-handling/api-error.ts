export class ApiError {
	errorCodes?: string[];
	status: number;
	title: string;
	traceId: string;
	type: string;

	constructor(status: number, title: string, traceId: string, type: string, errorCodes?: string[]) {
		this.errorCodes = errorCodes;
		this.status = status;
		this.title = title;
		this.traceId = traceId;
		this.type = type;
	}
}
