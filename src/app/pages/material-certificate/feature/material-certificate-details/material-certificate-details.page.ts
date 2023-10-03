import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs/internal/Subject';

@Component({
	selector: 'app-material-certificate-details',
	templateUrl: './material-certificate-details.page.html',
	styleUrls: ['./material-certificate-details.page.scss']
})
export class MaterialCertificateDetailsPage implements OnDestroy {
	private destroy$ = new Subject<void>();

	constructor(private router: Router) {}

	ngOnDestroy(): void {
		this.destroy$.next();
		this.destroy$.complete();
	}

	public naviagetToDashboard(): void {
		this.router.navigate(['/dashboard']);
	}
}
