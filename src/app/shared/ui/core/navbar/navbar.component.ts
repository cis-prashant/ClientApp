import { Component, HostListener, ElementRef, ViewChild, Input } from '@angular/core';

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.scss']
})

export class NavBarComponent {

	@ViewChild('menuButtonAdmin')
	menuButton1!: ElementRef;
    @ViewChild('menuButtonUser')
	menuButton2!: ElementRef;

	@Input() public title: string = '';
	@Input() public data!: Object;

	navbarItems : any;
	isOpenPopup = false;
	openUser = false;
	openAdmin = false;

	ngOnInit() {
		this.navbarItems = this.data;
	}

	openPopup() {
		this.isOpenPopup = !this.isOpenPopup;
	}

	toggleUser() {
		this.openUser = !this.openUser;
	}

	toggleAdmin() {
		this.openAdmin = !this.openAdmin;
	}

	@HostListener('document:click', ['$event'])
	onClick(event: Event) {
		if (this.openUser && !this.menuButton2.nativeElement.contains(event.target as Node)) {
		this.openUser = false;
		
		}
		if (this.openAdmin && !this.menuButton1.nativeElement.contains(event.target as Node)) {
		this.openAdmin = false;
		}
	}
} 
