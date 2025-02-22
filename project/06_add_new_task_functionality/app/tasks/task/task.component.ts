import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../task.model';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input() task!:Task;
  @Output() completeTask = new EventEmitter();

  onCompleteTask(){
    console.log('complete button clicked...');
    this.completeTask.emit(this.task.id);
  }
}
