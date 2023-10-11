import { Component } from '@angular/core';
import navbarItems from './navbar-items';

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.scss']
})
export class NavBarComponent {

	constructor() {

	}

	navbarItems = navbarItems;
	isOpenPopup = false;
	openUser = false;
	openAdmin = false;

	ngOnInit() {
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
} 
