import { Component } from '@angular/core';
import { DUMMY_USERS } from '../../dummy-users';

const randomUserIndex = Math.floor((Math.random() * DUMMY_USERS.length));

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
 selectedUser = DUMMY_USERS[randomUserIndex];

 get imagePath(){
  return "images/users/"+this.selectedUser.avatar;
 }

 onSelectUser(){
  const idx = Math.floor((Math.random() * DUMMY_USERS.length));
  console.log('selected user: ', this.selectedUser);
  this.selectedUser = DUMMY_USERS[idx];
 }
}
