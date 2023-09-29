import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonModule } from 'src/app/shared/ui/input/button/button.module';
import { DashboardPageRoutingModule } from './dashboard-routing.module';
import { DashboardPage } from './dashboard.page';

@NgModule({
	declarations: [DashboardPage],
	imports: [CommonModule, TranslateModule, DashboardPageRoutingModule, ButtonModule],
	providers: []
})
export class DashboardPageModule {}
