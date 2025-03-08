import { Component } from '@angular/core';
import { EmpService } from '../emp.service';
import { Employee } from '../emp.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-emp-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './emp-list.component.html',
  styleUrl: './emp-list.component.css'
})
export class EmpListComponent {

  empList:Employee[] = [];

  constructor(private empService:EmpService){}

  ngOnInit(){
    this.loadEmp();
  }

  deleteEmp(id:any){
    console.log('id to be deleted: ', id);
    this.empService.deleteEmp(id).subscribe((data)=>{ 
      console.log(data," deleted");
      this.loadEmp();
    });
   
  }

  loadEmp(){
    this.empService.getAllEmployees().subscribe(data => {
      this.empList = data;
    });
  }

}
