import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RestInterceptor } from '../../../../shared/data-access/services/rest/rest.interceptor';
import { RestService } from '../../../../shared/data-access/services/rest/rest.service';
import { EmployeeModel } from '../models/employee.model';

@Injectable({ providedIn: 'root' })
export class EmployeeService extends RestService {
	constructor(httpClient: HttpClient, restInterceptor: RestInterceptor) {
		super(httpClient, restInterceptor, '/employee');
	}

	public getEmployeeById(id: string): Observable<EmployeeModel> {
		return super.get<EmployeeModel>(`/${id}`);
	}
}
