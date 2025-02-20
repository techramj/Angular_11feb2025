import { Component, Input } from '@angular/core';
import { UserComponent } from '../user/user.component';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [UserComponent, NgFor, NgIf],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {

  @Input({alias:'my-users'}) users:{name:string, age:number, gender:string}[] =[];

}
