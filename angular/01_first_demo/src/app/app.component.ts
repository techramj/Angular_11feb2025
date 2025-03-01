import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from './user/user.component';
import { UsersComponent } from "./users/users.component";
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { Comp3Component } from './comp3/comp3.component';
import { ButtonBannerComponent } from './button-banner/button-banner.component';
import { ButtonComponent } from './button/button.component';
import { BindingComponent } from './binding/binding.component';
import { AngularBasicComponent } from './angular-basic/angular-basic.component';
import { ServerComponent } from './servers/server/server.component';
import { ServersComponent } from './servers/servers.component';
import { GreetComponent } from './greet/greet.component';
import { DirectiveExpComponent } from './directive-exp/directive-exp.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ ButtonBannerComponent, ButtonComponent, BindingComponent, AngularBasicComponent, ServersComponent,
    GreetComponent, DirectiveExpComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  subject:string = 'Angular';
  cnt!:number;

  users:{name:string, age:number, gender:string}[] = [
    {name:'Sam', age:23, gender:'Male'},
    {name:'Ajay', age:20, gender:'Male'},
    {name:'Dipak', age:21, gender:'Male'},
  ];
 

  buttonCounter(num:number){
    console.log("Appcomponent: button clicked", num);
    this.cnt = num;
  }

  
  


}
