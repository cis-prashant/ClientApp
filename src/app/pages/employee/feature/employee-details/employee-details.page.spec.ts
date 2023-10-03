import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EmployeeDetailsPage } from './employee-details.page';

describe('EmployeeDetailsPage', () => {
	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [EmployeeDetailsPage],
			imports: [HttpClientModule],
			schemas: [CUSTOM_ELEMENTS_SCHEMA]
		}).compileComponents();
	});

	it('should create the employee page', () => {
		const fixture = TestBed.createComponent(EmployeeDetailsPage);
		const homePage = fixture.componentInstance;
		expect(homePage).toBeTruthy();
	});
});
