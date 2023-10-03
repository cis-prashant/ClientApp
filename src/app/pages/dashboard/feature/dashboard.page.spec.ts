import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { DashboardPage } from './dashboard.page';

describe('DashboardComponent', () => {
	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [DashboardPage],
			imports: [HttpClientModule, TranslateModule.forRoot()],
			schemas: [CUSTOM_ELEMENTS_SCHEMA]
		}).compileComponents();
	});

	it('should create the dashboardPage', () => {
		const fixture = TestBed.createComponent(DashboardPage);
		const homePage = fixture.componentInstance;
		expect(homePage).toBeTruthy();
	});
});
