import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { of } from 'rxjs';
import { ErrorPage } from './error.page';

describe('ErrorPage', () => {
	let component: ErrorPage;
	let fixture: ComponentFixture<ErrorPage>;

	beforeEach(async () => {
		const activatedRouteStub = {
			snapshot: {
				paramMap: convertToParamMap({ type: 1, description: 'Sample error' })
			},
			queryParams: of({ type: 1, description: 'Sample error' })
		};

		await TestBed.configureTestingModule({
			declarations: [ErrorPage],
			schemas: [CUSTOM_ELEMENTS_SCHEMA],
			providers: [
				{
					provide: ActivatedRoute,
					useValue: activatedRouteStub
				}
			]
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(ErrorPage);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create the errorPage', () => {
		const fixture = TestBed.createComponent(ErrorPage);
		const errorPage = fixture.componentInstance;
		expect(errorPage).toBeTruthy();
	});

	it('should initialize error properties from query parameters', () => {
		expect(component.error.type).toBe(1);
		expect(component.error.description).toBe('Sample error');
	});

	it('should unsubscribe from destroy$', () => {
		spyOn(component.destroy$, 'next');
		spyOn(component.destroy$, 'complete');

		component.ngOnDestroy();

		expect(component.destroy$.next).toHaveBeenCalled();
		expect(component.destroy$.complete).toHaveBeenCalled();
	});
});
