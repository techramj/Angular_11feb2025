import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskData, Task } from './task.model';
import { NewTaskComponent } from './new-task/new-task.component';
import { TasksService } from './tasks.service';



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

  constructor(private taskService:TasksService){
  }

  /*taskService = new TasksService(); 
   this will not work, when you will add TasksComponent, new TaskService will be created
  */
  

  get selectedUserTasks(){
    return this.taskService.getUserTasks(this.selectUserId);
  }

  onCompleteTask(id:string){
    this.taskService.removeTask(id);
  }

  onStartAddTask(){
    this.isAddingTask = true;
  }

  onCancelNewTask(){
    this.isAddingTask = false;
  }

  onAddTask(data:NewTaskData){
    this.taskService.addTask(data, this.selectUserId);
  }

}
