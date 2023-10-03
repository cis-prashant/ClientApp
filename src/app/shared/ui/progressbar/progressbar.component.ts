import { Component, EventEmitter, Input, Output } from '@angular/core';

let nextInputId = 0;

@Component({
	selector: 'app-progressbar',
	templateUrl: './progressbar.component.html',
	styleUrls: ['./progressbar.component.scss']
})
export class ProgressbarComponent {
	public id = `app-progressbar-${nextInputId++}`;
	@Output() progressbarChange = new EventEmitter<string>();
	@Input() public ariaLabel = 'Hej';
	@Input() public value = 100;
	@Input() public max = 100;
	@Input() public showValue = true;
	@Input() public type = 'success';
}
