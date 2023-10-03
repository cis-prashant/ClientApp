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

  @Output() selectValueChange = new EventEmitter<string>();

  static nextId = 1;

  constructor() {
    if(this.id == undefined || this.id == '') this.id = 'app-dropdown-'+ DropdownComponent.nextId++;
  }

  onSelectChanged(event: any) {
    if (event == null || event === '') {
			return;
		}
    const selectedValue = event.target.value;
		this.selectValueChange.emit(selectedValue);
  }

}
