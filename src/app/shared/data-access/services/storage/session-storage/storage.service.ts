import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class SessionStorageService {
	public clear(): void {
		window.sessionStorage.clear();
	}

	public setItem<T>(key: string, item: T): void {
		window.sessionStorage.removeItem(key);
		window.sessionStorage.setItem(key, JSON.stringify(item));
	}

	public getItem<T>(key: string): T | null {
		const storedItem = window.sessionStorage.getItem(key);

		if (storedItem) {
			return JSON.parse(storedItem);
		}

		return null;
	}

	public itemExists(key: string): boolean {
		const storedItem = window.sessionStorage.getItem(key);

		if (storedItem) {
			return true;
		}

		return false;
	}

	public removeItem(key: string): void {
		window.sessionStorage.removeItem(key);
	}
}
