import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form1',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form1.component.html',
  styleUrl: './form1.component.css'
})
export class Form1Component {



  onSubmit(form:HTMLFormElement, email:HTMLInputElement, user:HTMLInputElement){
    console.log("form submitted.");
    console.log(form);
    console.log(email);
    console.log(user);
  }

}
