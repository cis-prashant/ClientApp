import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs/internal/Subject';
import { takeUntil } from 'rxjs/internal/operators/takeUntil';
import { ApiError } from 'src/app/shared/data-access/api-error-handling/api-error';
import { EmployeeService } from '../../data-access/services/employee.service';
@Component({
	selector: 'app-employee-details',
	templateUrl: './employee-details.page.html',
	styleUrls: ['./employee-details.page.scss']
})
export class EmployeeDetailsPage implements OnDestroy {
	private destroy$ = new Subject<void>();

	constructor(
		private emploeeService: EmployeeService,
		private router: Router
	) {}

	ngOnDestroy(): void {
		this.destroy$.next();
		this.destroy$.complete();
	}

	public getEmployeeById(): void {
		this.emploeeService
			.getEmployeeById('1aea2acf-04fa-48fa-941d-e1cde6c8a3f5')
			.pipe(takeUntil(this.destroy$))
			.subscribe({
				next: (response) => {
					console.log('response', response.firstName);
				},
				error: (error: ApiError) => {
					console.error('Error from subscription:', error);
				}
			});
	}

	public naviagetToDashboard(): void {
		this.router.navigate(['/dashboard']);
	}
}
