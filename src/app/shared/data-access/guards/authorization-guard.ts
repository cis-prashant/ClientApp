import { Injectable, inject } from '@angular/core';
import { CanMatchFn, Route, Router } from '@angular/router';
import { ErrorModel } from '../../../pages/error/data-access/models/error.model';
import { AuthenticationService } from '../services/authentication/authentication.service';

@Injectable({
	providedIn: 'root'
})
class PermissionsService {
	constructor(
		private router: Router,
		private authService: AuthenticationService
	) {}

	canMatch(permissions: string | string[]): boolean {
		return true;
		if (!this.authService.isLoggedIn()) {
			const error = new ErrorModel(401, 'You are not authenticated. Login to access this page.');
			this.router.navigate(['error'], { queryParams: error });
			return false;
		} else if (this.authService.isAuthorized(permissions)) {
			return true;
		} else {
			const error = new ErrorModel(403, 'You don’t have permission to access this resource');
			this.router.navigate(['error'], { queryParams: error });
			return false;
		}
	}

	canMatchRoot(): boolean {
		if (!this.authService.isLoggedIn()) {
			this.router.navigate(['login']);
			return false;
		}

		this.router.navigate(['dashboard']);
		return true;
	}
}

export const AuthorizationGuard: CanMatchFn = (route: Route): boolean => {
	const data = route ? route.data : undefined;
	const privileges = data ? data['priviliges'] : undefined;
	return inject(PermissionsService).canMatch(privileges);
};

export const AuthorizationGuardRoot: CanMatchFn = (): boolean => {
	return inject(PermissionsService).canMatchRoot();
};
