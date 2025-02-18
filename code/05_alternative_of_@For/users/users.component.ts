import { Component } from '@angular/core';
import { UserComponent } from '../user/user.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [UserComponent, NgFor],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {

  users = [
    {name:'Sam', age:23, gender:'Male'},
    {name:'Jessica'},
    {name:'Ajay', age:20, gender:'Male'},
    {name:'Dipak', age:21, gender:'Male'},
    {name:'Vijay', gender:'Male'},
    {name:'Shreya'},
  ];

}
