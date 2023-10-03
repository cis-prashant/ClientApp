import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonModule } from 'src/app/shared/ui/input/button/button.module';
import { MaterialCertificateDetailsPageRoutingModule } from './material-certificate-details-routing.module';
import { MaterialCertificateDetailsPage } from './material-certificate-details.page';

@NgModule({
	declarations: [MaterialCertificateDetailsPage],
	imports: [CommonModule, HttpClientModule, MaterialCertificateDetailsPageRoutingModule, TranslateModule, ButtonModule],
	providers: []
})
export class MaterialCertificateDetailsPageModule {}
