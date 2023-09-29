import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RestInterceptor } from '../../../../shared/data-access/services/rest/rest.interceptor';
import { RestService } from '../../../../shared/data-access/services/rest/rest.service';
import { IAuthenticatedUser } from '../models/authenticated-user.interface';
import { LoginCommandModel } from '../models/login-command.model';

@Injectable({ providedIn: 'root' })
export class ServerAuthenticationService extends RestService {
	constructor(httpClient: HttpClient, restInterceptor: RestInterceptor) {
		super(httpClient, restInterceptor, '/authentication');
	}

	public login(command: LoginCommandModel): Observable<IAuthenticatedUser> {
		return super.post<IAuthenticatedUser>('/login', command);
	}

	public logout(): Observable<null> {
		return super.post<null>('/logout');
	}
}
