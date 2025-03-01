import { Component, Input } from '@angular/core';
import { SafeLinkDirective } from '../safe-link.directive';

@Component({
  selector: 'app-directive-exp',
  standalone: true,
  imports: [SafeLinkDirective],
  templateUrl: './directive-exp.component.html',
  styleUrl: './directive-exp.component.css'
})
export class DirectiveExpComponent {
  git_tutorial_link = "https://github.com/techramj";

  
}
