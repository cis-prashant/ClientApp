import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { ProgressbarComponent } from './progressbar.component';

describe('ProgressbarComponent', () => {
	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [ProgressbarComponent],
			imports: [],
			schemas: [CUSTOM_ELEMENTS_SCHEMA]
		}).compileComponents();
	});

	it('should create the progressbar component', () => {
		const fixture = TestBed.createComponent(ProgressbarComponent);
		const progressbarComponent = fixture.componentInstance;
		expect(progressbarComponent).toBeTruthy();
	});
});
