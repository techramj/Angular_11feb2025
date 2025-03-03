import { NgModule } from "@angular/core";
import { TasksComponent } from "./tasks.component";
import { TaskComponent } from "./task/task.component";
import { NewTaskComponent } from "./new-task/new-task.component";
import { TestComponent } from "../shared/test/test.component";
import { FormsModule } from "@angular/forms";

@NgModule({
    declarations: [TasksComponent,
        TaskComponent, NewTaskComponent],
    imports: [TestComponent, FormsModule],
    exports: [TasksComponent]
})
export class TasksModule{

}