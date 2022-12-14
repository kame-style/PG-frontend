import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { IStudent } from '../istudent'
import { IStudentStatus } from '../istudent-status'

import { StudentService } from '../Services/student.service'
@Component({
  selector: 'app-student-home',
  templateUrl: './student-home.component.html',
  styleUrls: ['./student-home.component.css']
})

///<summary>
//This component is for student home page . where student see his/her details and also the status of previous application
// There is also the details of every scholarship available and also apply for a scholarship 



export class StudentHomeComponent implements OnInit {
  studentdata:IStudent={name:'',dob:new Date(),gender:'',mobileNumber:'',email:'',instituteCode:0,aadhaar:'',accountNo:'',bankIFSC:'',bankName:'',password:''}
  studentid:number=0
  statusdata:IStudentStatus={
    approvalId:0,
    applicationId:0,
    approvedByInstitute:0,
    approvedByNodalOfficer:0,
    approvedByMinistry:0,
  }
  constructor(private studentservice:StudentService,private activatedroute:ActivatedRoute) {
    
   }

  ngOnInit(): void {
    const tid=this.activatedroute.snapshot.paramMap.get('id')
    this.studentid=Number(tid)
    this.studentservice.getStudent(this.studentid).subscribe((data:IStudent)=>{this.studentdata=data} )
    this.studentservice.checkstatus(this.studentid).subscribe((data:any)=>{
      console.log(data)
      this.statusdata=data} )

  }
  

}
