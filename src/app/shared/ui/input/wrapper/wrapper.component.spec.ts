import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { WrapperComponent } from './wrapper.component'

describe('WrapperComponent', () => {
	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [WrapperComponent],
			imports: [],
			schemas: [CUSTOM_ELEMENTS_SCHEMA]
		}).compileComponents();
	});

	it('should create the text component', () => {
		const fixture = TestBed.createComponent(WrapperComponent);
		const wrapperComponent = fixture.componentInstance;
		expect(wrapperComponent).toBeTruthy();
	});
});
