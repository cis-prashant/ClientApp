import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaterialCertificateListPage } from './material-certificate-list.page';

const routes: Routes = [
	{
		path: '',
		component: MaterialCertificateListPage
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class MaterialCertificateListPageRoutingModule {}
