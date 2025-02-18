import { Component } from '@angular/core';
import { UserComponent } from '../user/user.component';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [UserComponent],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {

  users :{name:string, age:number, gender:'Male' |'Female' | ''}[] = [
    {name:'Sam', age:23, gender:'Male'},
    {name:'Jessica', age:21, gender:'Female'},
    {name:'Ajay', age:20, gender:'Male'},
    {name:'Dipak', age:21, gender:'Male'},
    {name:'Vijay', age:22, gender:'Male'},
    {name:'Shreya', age:21, gender:'Female'},
  ];

}
