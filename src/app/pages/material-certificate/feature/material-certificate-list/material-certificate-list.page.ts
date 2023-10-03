import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { takeUntil } from 'rxjs';
import { Subject } from 'rxjs/internal/Subject';
import { ApiError } from 'src/app/shared/data-access/api-error-handling/api-error';
import { LoadingService } from 'src/app/shared/ui/load-spinner/loading.service';
import { ToastManager } from 'src/app/shared/ui/services/toast/toast-manager.service';
import { DocumentService } from '../../data-access/services/document.service';

@Component({
	selector: 'app-material-certificate-list',
	templateUrl: './material-certificate-list.page.html',
	styleUrls: ['./material-certificate-list.page.scss']
})
export class MaterialCertificateListPage implements OnDestroy {
	private destroy$ = new Subject<void>();

	constructor(
		private router: Router,
		private toastManager: ToastManager,
		public loadingService: LoadingService,
		private documentService: DocumentService
	) {}

	ngOnDestroy(): void {
		this.destroy$.next();
		this.destroy$.complete();
	}

	public createDocument(file: File): void {
		const formData = new FormData();
		formData.append('title', file.name);
		formData.append('description', '');
		formData.append('data', file);
		formData.append('fileFormatId', 'e807b0dd-fdf9-4e4b-95d3-c40d43418666');
		formData.append('appCompanyId', 'de196222-7d37-4211-9235-6b07c3ac4747');

		this.loadingService.startLoading();
		this.documentService
			.createDocument(formData)
			.pipe(takeUntil(this.destroy$))
			.subscribe({
				next: () => {
					this.loadingService.stopLoading();
				},
				error: (error: ApiError) => {
					this.loadingService.stopLoading();
					this.toastManager.error('Error!', error.title);
				}
			});
	}

	public navigateToMaterialCertificateDetails(): void {
		this.router.navigate(['material-certificate/1']);
	}

	public naviagetToDashboard(): void {
		this.router.navigate(['/dashboard']);
	}
}
