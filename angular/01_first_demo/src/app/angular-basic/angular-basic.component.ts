import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-angular-basic',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './angular-basic.component.html',
  styleUrl: './angular-basic.component.css'
})
export class AngularBasicComponent {

  title ="Angular Basic";
  colors = ['RED','BLUE','YELLOW','ORANGE','BLABLA'];
  day = 1;
  min=1;
  max = 8;
  show = true;
  hide = false;

  time = new Date();


}
