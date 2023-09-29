import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CustomHttpInterceptor implements HttpInterceptor {
	intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
		const headers = new HttpHeaders({
			'Cache-control': 'no-cache',
			Pragma: 'no-cache',
			Expires: '0'
		});

		const options: { headers?: HttpHeaders; withCredentials: boolean } = {
			headers,
			withCredentials: true
		};

		const modifiedRequest = request.clone(options);

		return next.handle(modifiedRequest);
	}
}
