import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-banner',
  standalone: true,
  imports: [],
  templateUrl: './button-banner.component.html',
  styleUrl: './button-banner.component.css'
})
export class ButtonBannerComponent {
  @Input() count!:number;
}
