import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpService } from '../emp.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-emp-edit',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './emp-edit.component.html',
  styleUrl: './emp-edit.component.css'
})
export class EmpEditComponent {
  id:any = '';
  emp:any = {};

  constructor(private route:ActivatedRoute, 
    private empService: EmpService,
    private router:Router
  ){}

  ngOnInit(): void {
     this.id = this.route.snapshot.params['empId'];
     console.log('id: ',this.id);

     this.empService.getEmpById(this.id)
     .subscribe(
      (data)=>{
        this.emp = data;
        console.log(data);
      }
     );
  }

  updateEmployee(){
    this.empService.updateEmp(this.id, this.emp)
    .subscribe((data)=> {
        this.router.navigateByUrl("/emp-list");
    });
  }
}
