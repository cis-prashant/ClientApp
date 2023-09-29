import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorizationGuardRoot } from './shared/data-access/guards/authorization-guard';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
	{
		path: 'home',
		component:HomeComponent
	},
	{
		path: 'dashboard',
		loadChildren: () => import('./pages/dashboard/feature/dashboard.module').then((m) => m.DashboardPageModule)
	},
	{
		path: 'login',
		loadChildren: () => import('./pages/login/feature/login.module').then((m) => m.LoginPageModule)
	},
	{
		path: 'employee',
		loadChildren: () =>
			import('./pages/employee/feature/employee-shell/employee-shell.module').then((m) => m.EmployeeShellModule)
	},
	{
		path: 'material-certificate',
		loadChildren: () =>
			import('./pages/material-certificate/feature/material-certificate-shell/material-certificate-shell.module').then(
				(m) => m.MaterialCertificateShellModule
			)
	},
	{
		path: 'error',
		loadChildren: () => import('./pages/error/feature/error.module').then((m) => m.ErrorPageModule)
	},
	{
		path: '',
		canMatch: [AuthorizationGuardRoot],
		loadChildren: () => import('./pages/login/feature/login.module').then((m) => m.LoginPageModule)
	},
	{
		path: '**',
		redirectTo: '/error?type=404&description=Page is not found'
	}
	
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
