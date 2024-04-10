import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AppraisalFormsService } from '../appraisal-forms.service';
import { CustomToasterService } from '../../custom-toaster/custom-toaster-service.service';
import { Router, RouterModule } from '@angular/router';
import { AppraisalForms } from '../appraisal-forms';

import { CommonModule } from '@angular/common';
import { CustomToasterModule } from '../../custom-toaster/custom-toaster.module';

@Component({
  selector: 'app-add-appraisal-forms',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,RouterModule,CustomToasterModule],
  templateUrl: './add-appraisal-forms.component.html',
  styleUrl: './add-appraisal-forms.component.css'
})
export class AddAppraisalFormsComponent implements OnInit{
  form!:FormGroup;

  constructor(private appraisalFormsService:AppraisalFormsService,
    private router:Router,
    private customToasterService:CustomToasterService
  ){}

  ngOnInit(): void {
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
    this.addAppraisalForms(this.form.value);
  }
  addAppraisalForms(appraisalForms:AppraisalForms) {
    this.appraisalFormsService.create(appraisalForms).subscribe((response:any)=>{
      this.customToasterService.success("APPRAISAL FOMRS CREATED SUCCESSFULLY....","SUCCESS");
      this.router.navigateByUrl('apprisalForms/list');
    })
  }
}
