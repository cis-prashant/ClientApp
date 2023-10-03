import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs/internal/Subject';
import { ErrorModel } from 'src/app/pages/error/data-access/models/error.model';

@Component({
	selector: 'app-error',
	templateUrl: './error.page.html',
	styleUrls: ['./error.page.scss']
})
export class ErrorPage implements OnDestroy, OnInit {
	public destroy$ = new Subject<void>();
	public error: ErrorModel = {};

	constructor(private route: ActivatedRoute) {}

	ngOnInit() {
		this.route.queryParams.subscribe((queryParams) => {
			this.error.type = queryParams['type'];
			this.error.description = queryParams['description'];
		});
	}

	ngOnDestroy(): void {
		this.destroy$.next();
		this.destroy$.complete();
	}
}
