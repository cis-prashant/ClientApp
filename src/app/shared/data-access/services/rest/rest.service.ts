import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from '../../../../../environments/environment';
import { ApiError } from '../../api-error-handling/api-error';
import { RestInterceptor } from './rest.interceptor';

interface IHttpOptions {
	headers: HttpHeaders;
	responseType: 'json';
	withCredentials: boolean;
}

const cacheHeaders = {
	'Cache-control': 'no-cache',
	Pragma: 'no-cache',
	Expires: '0'
};

export abstract class RestService {
	private readonly options: IHttpOptions;
	protected constructor(
		private httpClient: HttpClient,
		private restInterceptor: RestInterceptor,
		public controllerUrl: string
	) {
		this.options = {
			responseType: 'json',
			headers: new HttpHeaders(cacheHeaders).append('X-Requested-With', 'XMLHttpRequest'),
			withCredentials: true
		};
	}

	//TODO: Replace any with something else and remove the exception below
	/* eslint-disable @typescript-eslint/no-explicit-any */
	protected get<T>(
		partialResourceUrl: string | number,
		params?: { [index: string]: any },
		handleErrors = true
	): Observable<T> {
		const url = this.createUrl(partialResourceUrl);

		if (params) {
			Object.keys(params).forEach((a) => (params[a] === undefined || params[a] === null ? delete params[a] : {}));
		}
		const httpParams = this.buildParams(params);

		return this.httpClient.get<T>(url, { ...this.options, params: httpParams }).pipe(
			catchError((error: HttpErrorResponse) => {
				const mappedError = this.mapToApiError(error);
				return this.doIntercept(mappedError, handleErrors);
			})
		);
	}

	public post<T>(
		partialResourceUrl: string,
		object?: any,
		params?: { [index: string]: any },
		handleErrors = true
	): Observable<T> {
		const httpParams = this.buildParams(params);
		const url = this.createUrl(partialResourceUrl);

		return this.httpClient.post<T>(url, object, { ...this.options, params: httpParams }).pipe(
			catchError((error: HttpErrorResponse) => {
				const mappedError = this.mapToApiError(error);
				return this.doIntercept(mappedError, handleErrors);
			})
		);
	}

	protected put<T>(
		partialResourceUrl: string | number,
		object: any,
		params?: { [index: string]: any },
		handleErrors = true
	): Observable<T> {
		const url = this.createUrl(partialResourceUrl);
		const httpParams = this.buildParams(params);

		return this.httpClient.put<T>(url, object, { ...this.options, params: httpParams }).pipe(
			catchError((error: HttpErrorResponse) => {
				const mappedError = this.mapToApiError(error);
				return this.doIntercept(mappedError, handleErrors);
			})
		);
	}

	protected patch<T>(
		partialResourceUrl: string | number,
		object: any,
		params?: { [index: string]: any },
		handleErrors = true
	): Observable<T> {
		const url = this.createUrl(partialResourceUrl);
		const httpParams = this.buildParams(params);

		return this.httpClient.patch<T>(url, object, { ...this.options, params: httpParams }).pipe(
			catchError((error: HttpErrorResponse) => {
				const mappedError = this.mapToApiError(error);
				return this.doIntercept(mappedError, handleErrors);
			})
		);
	}

	protected delete<T>(
		partialResourceUrl: string | number,
		params?: { [index: string]: any },
		options?: any,
		handleErrors = true
	): Observable<T> {
		const url = this.createUrl(partialResourceUrl);
		const httpParams = this.buildParams(params);

		return this.httpClient.delete<T>(url, { ...this.options, params: httpParams }).pipe(
			catchError((error: HttpErrorResponse) => {
				const mappedError = this.mapToApiError(error);
				return this.doIntercept(mappedError, handleErrors);
			})
		);
	}

	private createUrl(partialResourceUrl: string | number): string {
		const resourceUrl = this.createResourceUrl(partialResourceUrl);
		return environment.webApiDomain + resourceUrl;
	}

	private createResourceUrl(partialResourceUrl: string | number): string {
		let resourceUrl = this.controllerUrl;
		if (partialResourceUrl != '') {
			resourceUrl = resourceUrl + partialResourceUrl;
		}

		return resourceUrl;
	}

	private buildParams(params?: { [index: string]: any }): HttpParams {
		let httpParams = new HttpParams();
		if (!params) {
			return httpParams;
		}

		for (const param in params) {
			if (Object.hasOwn(params, param)) {
				if (Array.isArray(params[param])) {
					for (const p of params[param]) {
						httpParams = httpParams.append(param, p);
					}
				} else {
					httpParams = httpParams.append(param, params[param]);
				}
			}
		}

		return httpParams;
	}

	private doIntercept(error: ApiError, handleErrors: boolean): Observable<never> {
		if (handleErrors) {
			this.restInterceptor.interceptError(error);
		}

		return throwError(() => error);
	}

	private mapToApiError(error: HttpErrorResponse): ApiError {
		return new ApiError(error.status, error.error.title, error.error.traceId, error.error.type, error.error.errorCodes);
	}
}
