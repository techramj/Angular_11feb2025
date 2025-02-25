import { Injectable } from "@angular/core";
import { dummy_tasks } from "../dummy-tasks";
import { NewTaskData, Task } from "./task.model";

@Injectable({
    providedIn:'root'
})
export class TasksService{

    private tasks:Task[] = dummy_tasks;

    constructor(){
        const tasks = localStorage.getItem('tasks');
        if(tasks){
            console.log(tasks);
            this.tasks = JSON.parse(tasks);
        }
    }

    removeTask(id:string){
        this.tasks = this.tasks.filter(task => task.id != id);
        this.saveTasks();
    }

    getUserTasks(userId: string){
        return this.tasks.filter(task => task.userId === userId);
    }

    addTask(data:  NewTaskData, userId:string){
        this.tasks.unshift({
            id:new Date().getTime().toString(),
            userId:userId,
            title:data.title,
            summary:data.summary,
            dueDate:data.dueDate
          });
          this.saveTasks();
    }
    private saveTasks(){
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }

}