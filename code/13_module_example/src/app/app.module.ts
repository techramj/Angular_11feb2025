import { NgModule } from "@angular/core";
import { UserComponent } from "./user/user.component";
import { TasksComponent } from "./tasks/tasks.component";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { TaskComponent } from "./tasks/task/task.component";
import { NewTaskComponent } from "./tasks/new-task/new-task.component";
import { TestComponent } from "./shared/test/test.component";

@NgModule({
    declarations : [AppComponent, UserComponent, TasksComponent,
        TaskComponent, NewTaskComponent
    ],
    bootstrap : [AppComponent],
    imports : [BrowserModule, TestComponent]
})
export class AppModule{

}