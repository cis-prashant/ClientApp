import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorizationGuard } from 'src/app/shared/data-access/guards/authorization-guard';
import { SystemPermissions } from 'src/app/shared/data-access/models/system-permissions';
import { DashboardPage } from './dashboard.page';

const routes: Routes = [
	{
		path: '',
		canMatch: [AuthorizationGuard],
		data: { priviliges: [SystemPermissions.COMPANY_CONTACT_ACCESS] },
		component: DashboardPage
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class DashboardPageRoutingModule {}
