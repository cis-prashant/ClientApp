import { Injectable } from '@angular/core';
import { AuthenticatedUserModel } from 'src/app/pages/login/data-access/models/authenticated-user.model';
import { SessionStorageService } from '../storage/session-storage/storage.service';

const USER_KEY = 'auth-user';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
	constructor(private sessionStorageService: SessionStorageService) {}

	public isAuthorized(permissions: string | string[]): boolean {
		permissions = Array.isArray(permissions) ? permissions : [permissions];
		if (!permissions || permissions == undefined || permissions.length === 0) {
			return false;
		}

		const user = this.getUser();
		if (!user) {
			return false;
		}

		return permissions.some((r) => user.permissions.includes(r));
	}

	public saveUserToSessionStorage(user: AuthenticatedUserModel): void {
		this.sessionStorageService.setItem(USER_KEY, user);
	}

	public removeUserFromSessionStorage(): void {
		this.sessionStorageService.removeItem(USER_KEY);
	}

	public getUser(): AuthenticatedUserModel | null {
		return this.sessionStorageService.getItem(USER_KEY);
	}

	public isLoggedIn(): boolean {
		const user = this.sessionStorageService.itemExists(USER_KEY);

		if (user) {
			return true;
		}

		return false;
	}
}
