import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { ToastrModule } from 'ngx-toastr';
import { MaterialCertificateListPage } from './material-certificate-list.page';

describe('MaterialCertificateListPage', () => {
	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [MaterialCertificateListPage],
			imports: [HttpClientModule, TranslateModule.forRoot(), ToastrModule.forRoot()],
			schemas: [CUSTOM_ELEMENTS_SCHEMA]
		}).compileComponents();
	});

	it('should create the material-certificate-list page', () => {
		const fixture = TestBed.createComponent(MaterialCertificateListPage);
		const materialCertificateListPage = fixture.componentInstance;
		expect(materialCertificateListPage).toBeTruthy();
	});
});
