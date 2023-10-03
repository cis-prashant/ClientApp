import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { PopoverComponent } from './popover.component'

describe('PopoverComponent', () => {
	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [PopoverComponent],
			imports: [],
			schemas: [CUSTOM_ELEMENTS_SCHEMA]
		}).compileComponents();
	});

	it('should create the text component', () => {
		const fixture = TestBed.createComponent(PopoverComponent);
		const popoverComponent = fixture.componentInstance;
		expect(popoverComponent).toBeTruthy();
	});
});
