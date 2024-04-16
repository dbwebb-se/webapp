import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { LagerTitleComponent } from './lager-title/lager-title.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    LagerTitleComponent,
    RouterLink,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-lager';
}
