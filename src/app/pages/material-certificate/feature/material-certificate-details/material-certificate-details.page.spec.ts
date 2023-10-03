import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { MaterialCertificateDetailsPage } from './material-certificate-details.page';

describe('MaterialCertificateDetailsPage', () => {
	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [MaterialCertificateDetailsPage],
			imports: [HttpClientModule],
			schemas: [CUSTOM_ELEMENTS_SCHEMA]
		}).compileComponents();
	});

	it('should create the material-certificate-details page', () => {
		const fixture = TestBed.createComponent(MaterialCertificateDetailsPage);
		const materialCertificateDetailsPage = fixture.componentInstance;
		expect(materialCertificateDetailsPage).toBeTruthy();
	});
});
