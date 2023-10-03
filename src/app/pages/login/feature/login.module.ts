import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { LoadSpinnerModule } from 'src/app/shared/ui/load-spinner/load-spinner.module';
import { ButtonModule } from '../../../shared/ui/input/button/button.module';
import { TextModule } from '../../../shared/ui/input/text/text.module';
import { LoginPageRoutingModule } from './login-routing.module';
import { LoginPage } from './login.page';

@NgModule({
	declarations: [LoginPage],
	imports: [
		CommonModule,
		TranslateModule,
		LoginPageRoutingModule,
		HttpClientModule,
		TextModule,
		ButtonModule,
		LoadSpinnerModule
	],
	providers: []
})
export class LoginPageModule {}
