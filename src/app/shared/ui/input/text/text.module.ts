import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextComponent } from './text.component';
import { FormsModule } from '@angular/forms';

@NgModule({
	declarations: [TextComponent],
	imports: [CommonModule, FormsModule],
	exports: [TextComponent]
})
export class TextModule {}
