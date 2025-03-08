import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from './emp.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpService {

  url:string ="http://localhost:3000/employees";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'application/json'
    })
  };

  constructor(private http:HttpClient) { 
    console.log("http: ",http);
  }

  getAllEmployees(): Observable<Employee[]>{
    return this.http.get<Employee[]>(this.url);
  }

  deleteEmp(id:any): Observable<any>{
    return this.http.delete(this.url+"/"+id);
  }

  updateEmp(id:any, emp:any):Observable<Employee>{
    return this.http.put<Employee>(this.url+"/"+id, JSON.stringify(emp),this.httpOptions );
  }

  addEmployee(emp:any) : Observable<Employee>{
    return this.http.post<Employee>(this.url, JSON.stringify(emp),this.httpOptions );
  }

  getEmpById(id:any): Observable<Employee>{
    return this.http.get<Employee>(this.url+"/"+id);
  }
}
