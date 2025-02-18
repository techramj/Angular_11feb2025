import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from './user/user.component';
import { UsersComponent } from "./users/users.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ UsersComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  subject:string = 'Angular';
}
