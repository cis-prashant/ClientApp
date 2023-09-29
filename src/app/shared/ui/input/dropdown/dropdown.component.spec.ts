import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { DropdownComponent } from './dropdown.component'

describe('DropdownComponent', () => {
	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [DropdownComponent],
			imports: [],
			schemas: [CUSTOM_ELEMENTS_SCHEMA]
		}).compileComponents();
	});

	it('should create the text component', () => {
		const fixture = TestBed.createComponent(DropdownComponent);
		const dropdownComponent = fixture.componentInstance;
		expect(dropdownComponent).toBeTruthy();
	});
});
