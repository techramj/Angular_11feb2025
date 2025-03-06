import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-form3',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form3.component.html',
  styleUrl: './form3.component.css'
})
export class Form3Component {
 
  @ViewChild('f') form!:NgForm;

  onSubmit(){
    let email = this.form.value.email;
    let username = this.form.value.username;
    console.log(email, username);
  }

}
