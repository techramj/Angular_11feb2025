import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskComponent } from './task/task.component';
//import {type Task } from './task.model';
import { Task } from './task.model';
import { dummy_tasks } from '../dummy-tasks';
import { NewTaskComponent } from './new-task/new-task.component';

/*type Task ={id:string;
  userId:string;
  title:string;
  summary:string;
  dueDate:string;
};*/

/*interface Task{
  id:string;
  userId:string;
  title:string;
  summary:string;
  dueDate:string;
}
  */

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {

  @Input({required:true})name!:string;
  @Input() selectUserId!:string;
  isAddingTask = false;
  tasks:Task[] = dummy_tasks;

  get selectedUserTasks(){
    return this.tasks.filter(task=> task.userId === this.selectUserId);
  }

  onCompleteTask(id:string){
    this.tasks = this.tasks.filter(task => task.id != id);
    console.log(this.tasks);
  }

  onAddNewTask(){
    this.isAddingTask = true;
  }

  onCancelNewTask(){
    this.isAddingTask = false;
  }

}
