import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  subject:string = 'Angular';
  cnt!:number;

  users:{name:string, age:number, gender:string}[] = [
    {name:'Sam', age:23, gender:'Male'},
    {name:'Ajay', age:20, gender:'Male'},
    {name:'Dipak', age:21, gender:'Male'},
  ];
 

  buttonCounter(num:number){
    console.log("Appcomponent: button clicked", num);
    this.cnt = num;
  }

  
  


}
