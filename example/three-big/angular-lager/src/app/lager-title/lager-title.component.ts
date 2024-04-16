import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-lager-title',
  standalone: true,
  imports: [],
  templateUrl: './lager-title.component.html',
  styleUrl: './lager-title.component.css'
})
export class LagerTitleComponent {
  @Input() title = '';
}
