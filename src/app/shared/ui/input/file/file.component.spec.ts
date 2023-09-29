import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { FileComponent } from './file.component';

describe('FileComponent', () => {
	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [FileComponent],
			imports: [TranslateModule.forRoot()],
			schemas: [CUSTOM_ELEMENTS_SCHEMA]
		}).compileComponents();
	});

	it('should create the file component', () => {
		const fixture = TestBed.createComponent(FileComponent);
		const fileComponent = fixture.componentInstance;
		expect(fileComponent).toBeTruthy();
	});
});
