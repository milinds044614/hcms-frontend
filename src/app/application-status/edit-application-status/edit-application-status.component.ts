import { Component, OnInit } from '@angular/core';
import { ApplicationStatus } from '../application-status';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ApplicationStatusService } from '../application-status.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomToasterService } from '../../custom-toaster/custom-toaster-service.service';
import { response } from 'express';


@Component({
  selector: 'app-edit-application-status',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './edit-application-status.component.html',
  styleUrl: './edit-application-status.component.css'
})
export class EditApplicationStatusComponent implements OnInit {
  applicationId!:number;
  updatedApplicationStatus!:ApplicationStatus;
  form!:FormGroup;

  constructor(private applicationStatusService:ApplicationStatusService,
    private router:Router,
    private activateRoute:ActivatedRoute,
    private customToasterService:CustomToasterService
  ){}

  ngOnInit(): void {
    this.activateRoute.params.subscribe(params => {
      this.applicationId = params['apId'];
    })

    this.applicationStatusService.get(this.applicationId).subscribe((response:ApplicationStatus)=>{
      console.log("GET BY ID",response)
      this.updatedApplicationStatus=response;
    });

    this.form=new FormGroup({
      applicationId: new FormControl(''),
      candidate: new FormControl(''),
      vacancies:new FormControl(''),
      status:new FormControl('',[Validators.required]),
      applicationDate:new FormControl('',[Validators.required]),
      applicationNotes:new FormControl('')
    })
  }

  get formControl(){
    return this.form.controls;
  }

  onSubmit(){
    this.editApplicationStatus(this.form.value);
  }
  editApplicationStatus(applicationStatus:ApplicationStatus) {
    this.applicationStatusService.update(applicationStatus).subscribe((response:any)=>{
      this.customToasterService.info("DATA HAS BEENUPDATED","UPDATE");
      this.router.navigateByUrl('applicationStatus/list');
    })
  }
}
