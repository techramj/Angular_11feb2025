import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './users/user/user.component';
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from './tasks/tasks.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name = 'Jackson';
  selectedUserId:string = 'u1';

  users = DUMMY_USERS;

  get selectedUser(){
    const selectedUser = this.users.find((user)=> user.id === this.selectedUserId)!;
    return selectedUser;
  }

  onSelectUser(userId:string){
    console.log('user selected: ',userId);
    this.selectedUserId = userId;
  }
  
}
