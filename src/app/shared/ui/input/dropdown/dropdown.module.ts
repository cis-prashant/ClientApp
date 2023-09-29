import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownComponent } from './dropdown.component';
import { PopoverModule } from '../../popover/popover.module';
import { FormsModule } from '@angular/forms'; // Import FormsModule


@NgModule({
  declarations: [
    DropdownComponent
  ],
  imports: [
    CommonModule,
    PopoverModule,
    FormsModule
  ],
  exports: [DropdownComponent]
})
export class DropdownModule { }
