import { Component, computed, signal } from '@angular/core';
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
 //selectedUser = DUMMY_USERS[randomUserIndex];
   selectedUser = signal(DUMMY_USERS[randomUserIndex]);

   imagePath = computed(() => "images/users/"+this.selectedUser().avatar);

 onSelectUser(){
  const idx = Math.floor((Math.random() * DUMMY_USERS.length));
  console.log('selected user: ', this.selectedUser());
  this.selectedUser.set(DUMMY_USERS[idx]);
 }
}
