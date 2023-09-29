import { Component, EventEmitter, Input, Output } from '@angular/core';

let nextInputId = 0;
type TextInputType = 'text' | 'password';

@Component({
	selector: 'app-input-text',
	templateUrl: './text.component.html',
	styleUrls: ['./text.component.scss']
})
export class TextComponent {
	@Input() inputs: InputItem[] = [];
	@Input() public insideLabel: string | undefined;
	@Input() public type: TextInputType = 'text';

	@Output() valueChange = new EventEmitter<string>();

	public id = `app-input-text-${nextInputId++}`;

	onInputChange(event: string, index: number) {
		if (event == null || event === '' || index === null || index === undefined) {
			return;
		}

		const payload = `${event}:${index}`;
		this.valueChange.emit(payload);
	}
}

export interface InputItem {
	label: string;
	value: string;
	type?: string;
}
