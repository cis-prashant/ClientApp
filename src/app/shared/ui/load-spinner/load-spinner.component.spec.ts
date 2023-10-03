import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxSpinnerModule } from 'ngx-spinner';
import { LoadSpinnerComponent } from './load-spinner.component';

describe('SpinnerComponent', () => {
	let component: LoadSpinnerComponent;
	let fixture: ComponentFixture<LoadSpinnerComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [NgxSpinnerModule.forRoot()],
			declarations: [LoadSpinnerComponent]
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(LoadSpinnerComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
