import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from './emp.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpService {

  url:string ="http://localhost:3000/employees";

  constructor(private http:HttpClient) { 
    console.log("http: ",http);
  }

  getAllEmployees(): Observable<Employee[]>{
    return this.http.get<Employee[]>(this.url);
  }
}
