import { Component, Input } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'layout-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
  @Input() menuSidenav!: MatSidenav;
  @Input() profileSidenav!: MatSidenav;

  clickMenu() {
    this.menuSidenav.toggle();
    this.profileSidenav.close();
  }

  clickProfile() {
    this.profileSidenav.toggle();
    this.menuSidenav.close();
  }
}
