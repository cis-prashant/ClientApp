import { Injectable, EventEmitter } from '@angular/core';
import { ValidationError } from './validation-error.interface';
import { ApiError } from './api-error';

@Injectable({ providedIn: 'root' })
export class ApiErrorHandlingService {
	private errorRaised: EventEmitter<ApiError> = new EventEmitter();
	private validationRaised: EventEmitter<ValidationError[]> = new EventEmitter();

	public emitErrorRaised(error: ApiError) {
		this.errorRaised.emit(error);
	}

	public getErrorRaised(): EventEmitter<ApiError> {
		return this.errorRaised;
	}

	public emitValidationFailed(errors: ValidationError[]) {
		this.validationRaised.emit(errors);
	}

	public getValidationFailed() {
		return this.validationRaised;
	}
}
