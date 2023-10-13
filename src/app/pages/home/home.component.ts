import { Component } from '@angular/core';
import navbarItems from 'src/app/shared/ui/core/navbar/navbar-items';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  navbarItems = navbarItems;
}
