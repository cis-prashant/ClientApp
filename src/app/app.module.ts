import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ToastrModule } from 'ngx-toastr';
import { environment } from 'src/environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardPageModule } from './pages/dashboard/feature/dashboard.module';
import { EmployeeDetailsPageModule } from './pages/employee/feature/employee-details/employee-details.module';
import { LoginPageModule } from './pages/login/feature/login.module';
import { CustomHttpInterceptor } from './shared/data-access/services/rest/customHttp.interceptor';
import { HomeComponent } from './pages/home/home.component';
import { DropdownModule } from './shared/ui/input/dropdown/dropdown.module';
import { PopoverModule } from './shared/ui/popover/popover.module';
import { WrapperModule } from './shared/ui/input/wrapper/wrapper.module';


export function HttpLoaderFactory(httpclient: HttpClient) {
	return new TranslateHttpLoader(httpclient, environment.webApiDomain + '/appLocalization/', '');
}

@NgModule({
	declarations: [AppComponent, HomeComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		BrowserAnimationsModule,
		ToastrModule.forRoot({
			timeOut: 5000,
			extendedTimeOut: 1000,
			disableTimeOut: false,
			maxOpened: 0,
			autoDismiss: false,
			positionClass: 'toast-bottom-left',
			closeButton: false,
			easeTime: 300,
			tapToDismiss: true,
			preventDuplicates: true,
			resetTimeoutOnDuplicate: true,
			includeTitleDuplicates: true,
			newestOnTop: true
		}),
		TranslateModule.forRoot({
			defaultLanguage: 'language',
			loader: {
				provide: TranslateLoader,
				useFactory: HttpLoaderFactory,
				deps: [HttpClient]
			}
		}),
		DashboardPageModule,
		LoginPageModule,
		EmployeeDetailsPageModule,
		DropdownModule,
		PopoverModule,
		WrapperModule
	],
	providers: [
		{
			provide: HTTP_INTERCEPTORS,
			useClass: CustomHttpInterceptor,
			multi: true
		}
	],
	bootstrap: [AppComponent]
})
export class AppModule {}
