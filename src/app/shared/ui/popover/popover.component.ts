import { Component, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss']
})

export class PopoverComponent {

  @Input() public id: string | number = '';
  @Input() public title: string | null = null;
  @Input() public description: string | null = null;
  @Input() public delay: number = 300;

  

}
