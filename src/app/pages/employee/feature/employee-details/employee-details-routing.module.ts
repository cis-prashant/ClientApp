import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeDetailsPage } from './employee-details.page';

const routes: Routes = [
	{
		path: '',
		component: EmployeeDetailsPage
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class EmployeeDetailsPageRoutingModule {}
