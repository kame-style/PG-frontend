import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IStudent } from '../istudent';
import { IStudentLogin } from '../istudent-login';


//Service to fetch, add, check student details from the backend


@Injectable({
  providedIn: 'root'
})
export class StudentService {
  url='http://localhost:21856/api/Student/';
  httpOptions={headers:new HttpHeaders({'Content-type':'application/json'})};


  constructor(private httpclient:HttpClient) { }

  addStudent(student:any):Observable<any> {
    return this.httpclient.post<any>(this.url + 'AddStudent',student, this.httpOptions)
  }

  checkStudent(login:IStudentLogin):Observable<any>{
    return this.httpclient.post<IStudentLogin>(this.url + 'StudentLogin' ,login ,this.httpOptions)
  }
  getStudent(id:number):Observable<any>{
    return this.httpclient.get<IStudent>(this.url+'StudentDetails/'+id)
  }

  checkstatus(id:number):Observable<any>{
    return this.httpclient.get<any>(this.url+'ApprovalStatus/'+id)
  }
}
