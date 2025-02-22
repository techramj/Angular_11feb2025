import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';

/*type Task ={
  id:string;
  userId:string;
  title:string;
  summary:string;
  dueDate:string;
};*/

interface Task{
  id:string;
  userId:string;
  title:string;
  summary:string;
  dueDate:string;
}

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {

  @Input({required:true})name!:string;

  tasks:Task[] =[
    {
      id:'t01',
      userId:'u1',
      title:'Complete Assignment 01',
      summary: 'Explain property binding with example',
      dueDate:'2025-03-27'
    },
    {
      id:'t01',
      userId:'u1',
      title:'Complete Assignment 01',
      summary: 'Explain property binding with example',
      dueDate:'2025-03-27'
    },
    {
      id:'t02',
      userId:'u1',
      title:'Complete Assignment 02',
      summary: 'Explain different type of selector with example',
      dueDate:'2025-03-27'
    },
    {
      id:'t03',
      userId:'u3',
      title:'Component',
      summary: 'How to share the data between two component',
      dueDate:'2025-03-27'
    },
    {
      id:'t04',
      userId:'u1',
      title:'Complete Assignment 01',
      summary: 'Explain property binding with example',
      dueDate:'2025-03-27'
    }
  ];

}
