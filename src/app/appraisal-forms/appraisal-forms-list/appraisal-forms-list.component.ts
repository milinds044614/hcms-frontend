import { Component, OnInit } from '@angular/core';
import { AppraisalForms } from '../appraisal-forms';
import { AppraisalFormsService } from '../appraisal-forms.service';
import { Router } from '@angular/router';
import { CustomToasterService } from '../../custom-toaster/custom-toaster-service.service';
import { response } from 'express';

@Component({
  selector: 'app-appraisal-forms-list',
  standalone: true,
  imports: [],
  templateUrl: './appraisal-forms-list.component.html',
  styleUrl: './appraisal-forms-list.component.css'
})
export class AppraisalFormsListComponent implements OnInit {
  appraisalForms:AppraisalForms[]=[];

  constructor(private appraisalFormsService:AppraisalFormsService,private router:Router,private customToasterService:CustomToasterService){}
  ngOnInit(): void {
    this.getAllAppraisalForms();
    console.log('PROJECTS::',this.appraisalForms);
  }
  getAllAppraisalForms() {
 
    this.appraisalFormsService.getAll().subscribe((response:AppraisalForms[])=>{
      this.appraisalForms=response;
    })
  }
}
