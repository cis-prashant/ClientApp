import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { ToastrModule } from 'ngx-toastr';
import { LoginPage } from './login.page';

describe('LoginComponent', () => {
	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [LoginPage],
			imports: [HttpClientModule, TranslateModule.forRoot(), ToastrModule.forRoot()],
			schemas: [CUSTOM_ELEMENTS_SCHEMA]
		}).compileComponents();
	});

	it('should create the login page', () => {
		const fixture = TestBed.createComponent(LoginPage);
		const loginPage = fixture.componentInstance;
		expect(loginPage).toBeTruthy();
	});
});
