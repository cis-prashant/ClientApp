import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({ providedIn: 'root' })
export class LoadingService {
	public state = false;

	constructor(private spinner: NgxSpinnerService) {}

	public startLoading() {
		this.spinner.show();
		this.state = true;
	}

	public stopLoading() {
		this.spinner.hide();
		this.state = false;
	}

	public isLoading() {
		return this.state;
	}
}
