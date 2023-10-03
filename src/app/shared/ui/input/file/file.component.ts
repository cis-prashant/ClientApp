import { Component, EventEmitter, Input, Output } from '@angular/core';

let nextInputId = 0;

@Component({
	selector: 'app-input-file',
	templateUrl: './file.component.html',
	styleUrls: ['./file.component.scss']
})
export class FileComponent {
	public id = `app-input-file-${nextInputId++}`;
	@Output() fileChange = new EventEmitter<File>();
	@Output() public uploadFileEvent = new EventEmitter<File>();
	@Input() public requiredFileType: string[] = [];
	public selectedFile?: File;

	public uploadFile() {
		if (this.selectedFile) {
			this.uploadFileEvent.emit(this.selectedFile);
		}
	}

	onFileSelected(event: any) {
		const file: File = event.target.files[0];

		if (file) {
			this.selectedFile = file;
			this.fileChange.emit(file);
		}
	}
}
