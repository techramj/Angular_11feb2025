import { dummy_tasks } from "../dummy-tasks";
import { NewTaskData, Task } from "./task.model";


export class TasksService{

    private tasks:Task[] = dummy_tasks;

    removeTask(id:string){
        this.tasks = this.tasks.filter(task => task.id != id);
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
    }

}