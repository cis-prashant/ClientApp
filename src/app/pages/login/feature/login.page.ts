import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, map, takeUntil } from 'rxjs';
import { AuthenticationService } from 'src/app/shared/data-access/services/authentication/authentication.service';
import { InputItem } from 'src/app/shared/ui/input/text/text.component';
import { LoadingService } from 'src/app/shared/ui/load-spinner/loading.service';
import { ToastManager } from 'src/app/shared/ui/services/toast/toast-manager.service';
import { ApiError } from '../../../shared/data-access/api-error-handling/api-error';
import { IAuthenticatedUser } from '../data-access/models/authenticated-user.interface';
import { AuthenticatedUserModel } from '../data-access/models/authenticated-user.model';
import { LoginCommandModel } from '../data-access/models/login-command.model';
import { ServerAuthenticationService } from '../data-access/services/server-authentication.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.page.html',
	styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnDestroy, OnInit {
	private destroy$ = new Subject<void>();
	public loginCommandModel: LoginCommandModel;
	public inputItems: InputItem[];

	constructor(
		private authenticationService: AuthenticationService,
		private serverAuthenticationService: ServerAuthenticationService,
		private toastManager: ToastManager,
		public loadingService: LoadingService,
		private router: Router
	) {
		this.loginCommandModel = new LoginCommandModel();
		this.inputItems = [
			{ label: 'Email', value: this.loginCommandModel.email, type: 'text' },
			{ label: 'Password', value: this.loginCommandModel.password, type: 'password' }
		];
	}

	ngOnInit(): void {
		const isLoggedIn = this.authenticationService.isLoggedIn();
		if (isLoggedIn) {
			this.router.navigate(['dashboard']);
		}
	}

	ngOnDestroy(): void {
		this.destroy$.next();
		this.destroy$.complete();
	}

	public submitCredentials(): void {
		this.loadingService.startLoading();
		this.serverAuthenticationService
			.login(this.loginCommandModel)
			.pipe(
				takeUntil(this.destroy$),
				map((response: IAuthenticatedUser) => {
					return new AuthenticatedUserModel(response.roleId, response.permissions);
				})
			)
			.subscribe({
				next: (response: AuthenticatedUserModel) => {
					this.authenticationService.saveUserToSessionStorage(response);
					window.location.reload();
					this.router.navigate(['dashboard']);
					this.loadingService.stopLoading();
				},
				error: (error: ApiError) => {
					this.loadingService.stopLoading();
					this.toastManager.error('Error!', error.title);
				}
			});
	}

	public set setinputItems(items: InputItem[]) {
		this.inputItems = items;

		if (items && items.length === 2) {
			this.loginCommandModel.email = items[0].value;
			this.loginCommandModel.password = items[1].value;
		}
	}

	public onInputValueChange(event: string): void {
		const [value, index] = event.split(':');
		const numericIndex = +index;

		this.inputItems[numericIndex].value = value;
		this.setinputItems = this.inputItems;
	}
}
