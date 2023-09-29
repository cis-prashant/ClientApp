import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavBarComponent } from './navbar.component';

@NgModule({
	declarations: [NavBarComponent],
	imports: [RouterModule],
	exports: [NavBarComponent],

	providers: [],
	bootstrap: []
})
export class NavBarModule {}
