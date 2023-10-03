import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { TextComponent } from './text.component';

describe('TextComponent', () => {
	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [TextComponent],
			imports: [],
			schemas: [CUSTOM_ELEMENTS_SCHEMA]
		}).compileComponents();
	});

	it('should create the text component', () => {
		const fixture = TestBed.createComponent(TextComponent);
		const textComponent = fixture.componentInstance;
		expect(textComponent).toBeTruthy();
	});
});
