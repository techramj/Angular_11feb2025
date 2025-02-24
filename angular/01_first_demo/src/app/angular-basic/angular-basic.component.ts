import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GenderPipe } from '../shared/pipes/gender.pipe';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-angular-basic',
  standalone: true,
  imports: [CommonModule, FormsModule, GenderPipe],
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

  time = new Observable<string>(s => {
    setInterval(()=>{
      s.next(new Date().toLocaleString())
    })
  });

  emp = {
    id : 101,
    name: 'RaM JAIswaL',
    salary: '98765434210.4',
    variable : 0.25,
    doj : new Date(),
    mobile: '9876543210',
    pan: 'abcd123401',
    isMarried: true,
    city: {name:'Pune', temperature:'29.3', lattitude:"10", longitude:"73.5"},
    gender: 1
  }

  showEmployeeDetails = true;

  showHide(){
    this.showEmployeeDetails = !this.showEmployeeDetails;
  }


}
