import { style } from "@angular/animations";
import { Component, Input } from "@angular/core";

@Component(
    {
    selector:'app-user',
    standalone: true,
    imports: [],
    templateUrl : './user.component.html',
    styleUrl : './user.component.css'
    }
)
export class UserComponent{
   @Input()name:string = '';
   @Input()age:number = 0;
   @Input()gender:'Male' | 'Female'|'' ='';
}