import { Component, EventEmitter, Input, Output } from '@angular/core';

let nextInputId = 0;

@Component({
	selector: 'app-input-button',
	templateUrl: './button.component.html',
	styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
	@Input() public value: string | undefined;
	@Input() public disabled = false;
	@Input() public alt?: string;
	@Output() public clickEvent = new EventEmitter();

	public id = `app-input-button-${nextInputId++}`;

	public onClick(event: MouseEvent) {
		this.clickEvent.emit(event);
	}
}
