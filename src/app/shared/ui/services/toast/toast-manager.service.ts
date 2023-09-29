import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
	providedIn: 'root'
})
export class ToastManager {
	constructor(private toastr: ToastrService) {}

	public clearAll(): void {
		this.toastr.clear();
	}

	public success(title: string, message: string): void {
		this.toastr.success(message, title);
	}

	public info(title: string, message: string): void {
		this.toastr.info(message, title);
	}

	public warning(title: string, message: string): void {
		this.toastr.warning(message, title);
	}

	public error(title: string, message: string): void {
		this.toastr.error(message, title);
	}
}
