import { NgModule } from "@angular/core";
import { UserComponent } from "./user/user.component";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { TestComponent } from "./shared/test/test.component";
import { TasksModule } from "./tasks/tasks.module";

@NgModule({
    declarations : [AppComponent, UserComponent
    ],
    bootstrap : [AppComponent],
    imports : [BrowserModule, TestComponent, TasksModule]
})
export class AppModule{

}