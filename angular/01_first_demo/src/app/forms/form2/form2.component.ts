import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-form2',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form2.component.html',
  styleUrl: './form2.component.css'
})
export class Form2Component {

  email:string = 'Default value';
  username = "Default username";
  
  onSubmit(form:NgForm){
    console.log(form);
    console.log('email: ', form.value.email);
    console.log('usernmae: ', form.value.usernmae);
  }

}
