import { Routes } from '@angular/router';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { Comp3Component } from './comp3/comp3.component';
import { AngularBasicComponent } from './angular-basic/angular-basic.component';
import { ServersComponent } from './servers/servers.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EmployeesDetailsComponent } from './employees-details/employees-details.component';
import { NoSuchEmpComponent } from './no-such-emp/no-such-emp.component';

export const routes: Routes = [
   {path:'comp1', component:Comp1Component},
   {path:'comp2', component:Comp2Component},
   {path:'comp3', component:Comp3Component},
   {path:'angular-basic', component: AngularBasicComponent},
   {path:'servers', component:ServersComponent},
   {path:'emp/:empId', component: EmployeesDetailsComponent},
   {path:'invalid-emp',component:NoSuchEmpComponent},
   // {path:'',component:AngularBasicComponent , pathMatch:'full'},
   {path:'', redirectTo:'angular-basic', pathMatch:'full'},
   {path:'**', component:PageNotFoundComponent}
];
