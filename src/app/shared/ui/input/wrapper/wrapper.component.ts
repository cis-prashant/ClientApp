import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss']
})


export class WrapperComponent {

  @Input() public id :string | number = '';
  @Input() public editButtonDisabled: boolean = false;
  @Input() public editButtonHidden: boolean = false;
  @Input() public hidden: boolean = false;
  @Input() public edit: boolean = false;

  static nextId = 1;
  constructor() {
    if(this.id == undefined || this.id == '') this.id = WrapperComponent.nextId++;

  }
}
