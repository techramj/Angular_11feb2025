import { Routes } from '@angular/router';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { Comp3Component } from './comp3/comp3.component';
import { AngularBasicComponent } from './angular-basic/angular-basic.component';
import { ServersComponent } from './servers/servers.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EmployeesDetailsComponent } from './employees-details/employees-details.component';
import { NoSuchEmpComponent } from './no-such-emp/no-such-emp.component';
import { LifecycleDemoComponent } from './lifecycle-demo/lifecycle-demo.component';
import { Form1Component } from './forms/form1/form1.component';
import { Form2Component } from './forms/form2/form2.component';
import { Form3Component } from './forms/form3/form3.component';
import { Form4Component } from './forms/form4/form4.component';
import { EmpListComponent } from './emp/emp-list/emp-list.component';
import { EmpEditComponent } from './emp/emp-edit/emp-edit.component';
import { ObserverExampleComponent } from './observer-example/observer-example.component';
import { Observer1Component } from './observer-example/observer1/observer1.component';
import { Observer2Component } from './observer-example/observer2/observer2.component';
import { Observer3Component } from './observer-example/observer3/observer3.component';
import { Observer4Component } from './observer-example/observer4/observer4.component';

export const routes: Routes = [
   {path:'comp1', component:Comp1Component},
   {path:'comp2', component:Comp2Component},
   {path:'comp3', component:Comp3Component},
   {path:'angular-basic', component: AngularBasicComponent},
   {path:'servers', component:ServersComponent},
   {path:'emp-list', component: EmpListComponent},
   {path:'emp-edit/:empId', component: EmpEditComponent},
   {path:'invalid-emp',component:NoSuchEmpComponent},
   {path: "lifecycle", component:LifecycleDemoComponent},
   {path:'form1', component: Form1Component},
   {path:'form2', component:Form2Component },
   {path:'form3', component: Form3Component},
   {path:'form4', component: Form4Component},
   {path:'observer-example', component: ObserverExampleComponent},
   {path:'observer-example1', component: Observer1Component},
   {path:'observer-example2', component: Observer2Component},
   {path:'observer-example3', component: Observer3Component},
   {path:'observer-example4', component: Observer4Component},
   // {path:'',component:AngularBasicComponent , pathMatch:'full'},
   {path:'', redirectTo:'observer-example', pathMatch:'full'},
   {path:'**', component:PageNotFoundComponent}
];
