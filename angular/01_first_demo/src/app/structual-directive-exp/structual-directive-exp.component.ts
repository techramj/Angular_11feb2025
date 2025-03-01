import { Component, Input } from '@angular/core';
import { type Permission } from './permission.model';
import { AuthDirective } from '../auth.directive';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-structual-directive-exp',
  standalone: true,
  imports: [AuthDirective, FormsModule],
  templateUrl: './structual-directive-exp.component.html',
  styleUrl: './structual-directive-exp.component.css'
})
export class StructualDirectiveExpComponent {
  @Input() user !:Permission;
}
