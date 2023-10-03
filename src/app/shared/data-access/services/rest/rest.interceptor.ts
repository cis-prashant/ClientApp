import { Injectable } from '@angular/core';
import { ValidationError } from '../../api-error-handling/validation-error.interface';
import { ApiErrorHandlingService } from '../../api-error-handling/api-error-handling.service';
import { ApiError } from '../../api-error-handling/api-error';

@Injectable({ providedIn: 'root' })
export class RestInterceptor {
	constructor(private errorHandlingService: ApiErrorHandlingService) {}

	public interceptError(error: ApiError) {
		// eslint-disable-next-line max-len
		// TODO: Clean this method and add more error handling for each status type. Also add a default error handling for unknown errors.
		if (error.status === 401) {
			this.handleUnauthorized();
		}

		if (error.status === 400) {
			let errors: ValidationError[];
			try {
				errors = JSON.parse(error.title);
				if (!this.validationErrorTypeGuard(errors)) {
					throw new Error('ValidationError type not matched');
				}
			} catch (parseError) {
				errors = [{ PropertyName: null, ErrorMessage: error.title }];
			}

			this.errorHandlingService.emitValidationFailed(errors);
		}

		if (error.status === 500 || error.status === 405 || error.status === 415) {
			this.errorHandlingService.emitErrorRaised(error);
		}
	}

	private handleUnauthorized() {
		sessionStorage.clear();
		// NavigationGuardService.enabled = false; TODO: Add this functionality from prøvebyggeren

		// TODO: Navigate to an unauthorized page
	}

	private validationErrorTypeGuard(validationErrors: ValidationError[]): validationErrors is ValidationError[] {
		if ((validationErrors as ValidationError[])[0].ErrorMessage) {
			return true;
		}
		return false;
	}
}
