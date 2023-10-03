import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BootstrapModule } from '../bootstrap/bootstrap.module';
import { ProgressbarComponent } from './progressbar.component';

@NgModule({
	declarations: [ProgressbarComponent],
	imports: [CommonModule, FormsModule, BootstrapModule],
	exports: [ProgressbarComponent]
})
export class ProgressbarModule {}
