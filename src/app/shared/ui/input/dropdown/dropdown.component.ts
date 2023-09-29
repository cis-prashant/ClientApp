import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent {

  @Input() public id: string = '';
  @Input() public label: string = '';
  @Input() public popoverTitle: string | null = null;
  @Input() public popoverDescription: string | null = null;
  @Input() public values: string[] | null = null;
  @Input() public selectedValue: string = '';
  @Input() public disabled: boolean = true;
  @Input() public hidden: boolean = false;
  @Input() public required: boolean = false;

  static nextId = 1;

  constructor() {
    if(this.id == undefined || this.id == '') this.id = 'app-dropdown-'+ DropdownComponent.nextId++;
  }

}
