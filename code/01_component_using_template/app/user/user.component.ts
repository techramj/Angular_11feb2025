import { style } from "@angular/animations";
import { Component } from "@angular/core";

@Component(
    {
    selector:'app-user',
    standalone: true,
    imports: [],
    template : '<h1>User page</h1>',
    styles : 'h1{color:red}'
    }
)
export class UserComponent{

}