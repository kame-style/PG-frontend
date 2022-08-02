import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NodalService } from '../Services/nodal.service';
import { IInstitute } from '../iinstitute';
import { MinistryService } from '../Services/ministry.service';


@Component({
  selector: 'app-ministry-ins-details',
  templateUrl: './ministry-ins-details.component.html',
  styleUrls: ['./ministry-ins-details.component.css']
})

///<summary>
//This component is to show details of institute to ministry   
// Ministry can approve or reject the application. 

export class MinistryInsDetailsComponent implements OnInit {
  application: IInstitute={
    instituteId:0,
    instituteCategory:'',
    name:'',
    institutecode:0,
    disecode:0,
    location:'',
    instituteType:'',
    affiliatedState:'',
    affiliatedName:'',
    admissionStartYear:'',
    password:'',
    address:'',
    city:'',
    state:'', 
    district:'',
    pincode:0,
    principalName:'',
    principalNumber:'',
  }
  applicationId:number=0
  constructor(private ministry:MinistryService,private ActivatedRoute: ActivatedRoute) { }

  approveapplication(id:number):void{
    console.log("message"+id)
    this.ministry.verifyInsapplication(id).subscribe((data:any)=>{
      console.log(data)
    })
  }

  rejectapplication(id:number):void{
    console.log("message"+id)
    this.ministry.declineInsapplication(id).subscribe((data:any)=>{
      console.log(data)
    })
  }

  ngOnInit(): void {
    const tid = this.ActivatedRoute.snapshot.paramMap.get('id')
    this.applicationId = Number(tid);
    this.ministry.getInstitute(this.applicationId).subscribe((data: any) => {
      this.application = data
      console.log(this.application)
    })
  }

}
 