import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorizationGuard } from 'src/app/shared/data-access/guards/authorization-guard';
import { SystemPermissions } from 'src/app/shared/data-access/models/system-permissions';

const routes: Routes = [
	{
		path: '',
		canMatch: [AuthorizationGuard],
		data: { priviliges: [SystemPermissions.COMPANY_CONTACT_ACCESS] },
		loadChildren: () =>
			import('../material-certificate-list/material-certificate-list.module').then(
				(m) => m.MaterialCertificateListPageModule
			)
	},
	{
		path: ':id',
		canMatch: [AuthorizationGuard],
		data: { priviliges: [SystemPermissions.COMPANY_CONTACT_ACCESS] },
		loadChildren: () =>
			import('../material-certificate-details/material-certificate-details.module').then(
				(m) => m.MaterialCertificateDetailsPageModule
			)
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class MaterialCertificateShellRoutingModule {}
