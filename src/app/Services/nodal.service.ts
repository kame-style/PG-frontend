import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SchApplication } from '../sch-application';
import { IInstitute } from '../iinstitute';


// This service is used to provide services related to Nodal Officer
// it calls methods of related to application and institute approval
// or rejection in the backend


@Injectable({
  providedIn: 'root'
})
export class NodalService {
  url='http://localhost:21856/api/';
  httpOptions={headers:new HttpHeaders({'Content-type':'application/json'})};
  constructor(private httpclient:HttpClient) {}
    getStudents():Observable<any>{
        return this.httpclient.get<any>(this.url + 'ScholarshipApproval/ScholarshipForOfficer')
    }

    getInstitutes():Observable<any>{
      return this.httpclient.get<any>(this.url+'InstituteApproval/InstituteForOfficer')
    }

    verifyapplication(id:number):Observable<any>{
      console.log("inside service"+id)
      const body = {appid:id}
      return this.httpclient.put<any>(this.url+'ScholarshipApproval/ApproveByOfficer/'+id,body)
    }
  
    declineapplication(id:number):Observable<any>{
      console.log("inside service"+id)
      const body = {appid:id}
      return this.httpclient.put<any>(this.url+'ScholarshipApproval/RejecteByOfficer/'+id,body)
    }

    getInstitute(id:number):Observable<any>{
      return this.httpclient.get<any>(this.url+'Institute/InstituteDetails/'+id)
    }

    verifyInsapplication(id:number):Observable<any>{
      console.log("inside service"+id)
      const body = {appid:id}
      return this.httpclient.put<any>(this.url+'InstituteApproval/ApproveRequestByOfficer/'+id,body)
    }
  
    declineInsapplication(id:number):Observable<any>{
      console.log("inside service"+id)
      const body = {appid:id}
      return this.httpclient.put<any>(this.url+'InstituteApproval/RejectRequesteByOfficer/'+id,body)
    }
   
}

