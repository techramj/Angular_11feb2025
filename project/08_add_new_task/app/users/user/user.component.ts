import { Component, computed, EventEmitter, Input, Output, signal } from '@angular/core';



@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  
  @Input() id!:string;
  @Input() avatar!: string;
  @Input() name!:string;

  @Output() select = new EventEmitter();


  get imagePath(){
    return  "images/users/"+this.avatar
  }

  onSelectUser(){
    this.select.emit(this.id);
  }
}
