import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'side-menu';

  isMenuVisible = true;

  toggle = () => {
    this.isMenuVisible = !this.isMenuVisible;
  }
}
