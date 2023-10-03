import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorizationGuard } from 'src/app/shared/data-access/guards/authorization-guard';
import { SystemPermissions } from 'src/app/shared/data-access/models/system-permissions';

const routes: Routes = [
	{
		path: '',
		canMatch: [AuthorizationGuard],
		data: { priviliges: [SystemPermissions.COMPANY_CONTACT_ACCESS] },
		loadChildren: () => import('../employee-details/employee-details.module').then((m) => m.EmployeeDetailsPageModule)
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class EmployeeShellRoutingModule {}
