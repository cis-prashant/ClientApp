import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component'

describe('HomeComponent', () => {
	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [HomeComponent],
			imports: [],
			schemas: [CUSTOM_ELEMENTS_SCHEMA]
		}).compileComponents();
	});

	it('should create the text component', () => {
		const fixture = TestBed.createComponent(HomeComponent);
		const homeComponent = fixture.componentInstance;
		expect(homeComponent).toBeTruthy();
	});
});
