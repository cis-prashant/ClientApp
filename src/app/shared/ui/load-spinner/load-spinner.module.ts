import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxSpinnerModule } from 'ngx-spinner';
import { LoadSpinnerComponent } from './load-spinner.component';

@NgModule({
	imports: [CommonModule, NgxSpinnerModule],
	declarations: [LoadSpinnerComponent],
	exports: [LoadSpinnerComponent]
})
export class LoadSpinnerModule {}
