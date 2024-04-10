import { Component, OnInit } from '@angular/core';
import { AppraisalForms } from '../appraisal-forms';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AppraisalFormsService } from '../appraisal-forms.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomToasterService } from '../../custom-toaster/custom-toaster-service.service';
import { response } from 'express';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-appraisal-forms',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './edit-appraisal-forms.component.html',
  styleUrl: './edit-appraisal-forms.component.css'
})
export class EditAppraisalFormsComponent  implements OnInit{
  formId!:number;
  updatedAppraisalForms!:AppraisalForms;
  form!:FormGroup;

  constructor(private appraisalFormsService:AppraisalFormsService,
    private router:Router,
    private activatedRoute:ActivatedRoute,
    private customToasterService:CustomToasterService

    
  ){}
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      this.formId=params['afId'];
    })

    this.appraisalFormsService.get(this.formId).subscribe((response:AppraisalForms)=>{
      console.log("GET BY ID",response)
      this.updatedAppraisalForms=response;
    });

    this.form=new FormGroup({
      formId:new FormControl(''),
      employee: new FormControl(''),
      submissionDate:new FormControl(''),
      reviewer:new FormControl('')

    })
  }

  get formControl(){
    return this.form.controls;
  }  
  onSubmit(){
    console.log(this.form.value);
    this.editAppraisalForms(this.form.value);
  }
  editAppraisalForms(appraisalForms:AppraisalForms) {
    console.log("UPDATED VALUE:",response);
    this.customToasterService.info("data has been UPDATED","UPDATE");
    this.router.navigateByUrl('appraisalForms/list')
  }
}
