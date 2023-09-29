import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RestInterceptor } from '../../../../shared/data-access/services/rest/rest.interceptor';
import { RestService } from '../../../../shared/data-access/services/rest/rest.service';

@Injectable({ providedIn: 'root' })
export class DocumentService extends RestService {
	constructor(httpClient: HttpClient, restInterceptor: RestInterceptor) {
		super(httpClient, restInterceptor, '/document');
	}

	public createDocument(command: FormData): Observable<string> {
		return super.post<string>('', command);
	}
}
