import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonModule } from 'src/app/shared/ui/input/button/button.module';
import { FileModule } from 'src/app/shared/ui/input/file/file.module';
import { LoadSpinnerModule } from 'src/app/shared/ui/load-spinner/load-spinner.module';
import { MaterialCertificateListPageRoutingModule } from './material-certificate-list-routing.module';
import { MaterialCertificateListPage } from './material-certificate-list.page';

@NgModule({
	declarations: [MaterialCertificateListPage],
	imports: [
		CommonModule,
		HttpClientModule,
		MaterialCertificateListPageRoutingModule,
		TranslateModule,
		ButtonModule,
		LoadSpinnerModule,
		FileModule
	],
	providers: []
})
export class MaterialCertificateListPageModule {}
