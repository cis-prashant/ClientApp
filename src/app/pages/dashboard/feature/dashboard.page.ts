import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { takeUntil } from 'rxjs';
import { Subject } from 'rxjs/internal/Subject';
import { ApiError } from 'src/app/shared/data-access/api-error-handling/api-error';
import { AuthenticationService } from 'src/app/shared/data-access/services/authentication/authentication.service';
import { ServerAuthenticationService } from '../../login/data-access/services/server-authentication.service';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.page.html',
	styleUrls: ['./dashboard.page.scss']
})
export class DashboardPage implements OnDestroy {
	private destroy$ = new Subject<void>();

	constructor(
		private router: Router,
		private serverAuthenticationService: ServerAuthenticationService,
		private authenticationService: AuthenticationService
	) {}

	ngOnDestroy(): void {
		this.destroy$.next();
		this.destroy$.complete();
	}

	public navigateToEmployee(): void {
		this.router.navigate(['employee']);
	}

	public navigateToMaterialCertificateList(): void {
		this.router.navigate(['material-certificate']);
	}

	public logout(): void {
		this.serverAuthenticationService
			.logout()
			.pipe(takeUntil(this.destroy$))
			.subscribe({
				next: () => {
					this.authenticationService.removeUserFromSessionStorage();
					this.router.navigate(['login']);
				},
				error: (error: ApiError) => {
					console.error('Error', error);
				}
			});
	}
}
