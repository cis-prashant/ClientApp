import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ErrorPageRoutingModule } from './error-routing.module';
import { ErrorPage } from './error.page';

@NgModule({
	declarations: [ErrorPage],
	imports: [CommonModule, ErrorPageRoutingModule],
	providers: []
})
export class ErrorPageModule {}
