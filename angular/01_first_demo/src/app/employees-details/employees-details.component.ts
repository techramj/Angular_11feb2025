import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employees-details',
  standalone: true,
  imports: [],
  templateUrl: './employees-details.component.html',
  styleUrl: './employees-details.component.css'
})
export class EmployeesDetailsComponent  {
 id!:number;

 employees = [
  {id:1, name:"Jack", age:25},
  {id:2, name:"Raj", age:21},
  {id:3, name:"Gauri", age:22},
  {id:4, name:"Deepak", age:35},
 ];

 selectedEmp:{id:number, name:string, age:number} = {id:0, name:"Dummy Name", age:99};

  route = inject(ActivatedRoute);
  router = inject(Router);
  //constructor(private route:ActivatedRoute, private router : Router) {}
  
  ngOnInit() {
    console.log(this.route.paramMap);
    this.id = Number(this.route.snapshot.paramMap.get('empId')!);
    this.employees.forEach(emp => {
      if(emp.id == this.id){
        this.selectedEmp = emp;
      }
    });

   // let val1 = this.route.snapshot.queryParamMap.get("a");
    //console.log(val1);
    this.route.queryParams.subscribe(params => console.log(params));

    if(!this.selectedEmp.id){
      console.log('Invalid employee');
      //this.router.navigate(['invalid-emp']);
      this.router.navigateByUrl("/invalid-emp");
    }

    
  }


}
