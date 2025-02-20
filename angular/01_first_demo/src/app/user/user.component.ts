import { style } from "@angular/animations";
import { NgIf } from "@angular/common";
import { Component, Input } from "@angular/core";

@Component(
    {
    selector:'app-user',
    standalone: true,
    imports: [NgIf],
    templateUrl : './user.component.html',
    styleUrl : './user.component.css'
    }
)
export class UserComponent{
   @Input()name!:string ;
   @Input()age!:number;
   @Input()gender!:string;
}