import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { ButtonComponent } from './button.component';

describe('ButtonComponent', () => {
	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [ButtonComponent],
			imports: [],
			schemas: [CUSTOM_ELEMENTS_SCHEMA]
		}).compileComponents();
	});

	it('should create the button component', () => {
		const fixture = TestBed.createComponent(ButtonComponent);
		const buttonComponent = fixture.componentInstance;
		expect(buttonComponent).toBeTruthy();
	});
});
