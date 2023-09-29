import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { ProgressbarModule } from '../../progressbar/progressbar.module';
import { ButtonModule } from '../button/button.module';
import { FileComponent } from './file.component';

@NgModule({
	declarations: [FileComponent],
	imports: [CommonModule, FormsModule, ProgressbarModule, ButtonModule, TranslateModule],
	exports: [FileComponent]
})
export class FileModule {}
