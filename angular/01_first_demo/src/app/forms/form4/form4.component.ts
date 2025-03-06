import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-form4',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form4.component.html',
  styleUrl: './form4.component.css'
})
export class Form4Component {

  @ViewChild('f') form!:NgForm;

   genders = ['female', 'male' ,'Not Disclosed'];

   questioniare :{question:string, desc:string}[]= [
    {question:'favourite_movie', desc:'Favourite Movie'},
    {question: 'favourite_hero' , desc:'Favourite Hero'},
    {question: 'favourite_book' , desc:'Favourite Book'},
  ];

  defaultQuestion = 'favourite_book';
  
    onSubmit(){
      let email = this.form.value.email;
      let username = this.form.value.username;
      let gender = this.form.value.gender;
      let question = this.form.value.question;
      let ans = this.form.value.answer;

      console.log(email, username, gender, question, ans);
    }

}
