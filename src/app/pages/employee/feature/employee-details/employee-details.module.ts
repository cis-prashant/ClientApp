import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonModule } from 'src/app/shared/ui/input/button/button.module';
import { EmployeeDetailsPageRoutingModule } from './employee-details-routing.module';
import { EmployeeDetailsPage } from './employee-details.page';

@NgModule({
	declarations: [EmployeeDetailsPage],
	imports: [CommonModule, TranslateModule, EmployeeDetailsPageRoutingModule, HttpClientModule, ButtonModule],
	providers: []
})
export class EmployeeDetailsPageModule {}
