import { Component, OnInit } from '@angular/core';
import { AppraisalForms } from '../appraisal-forms';
import { AppraisalFormsService } from '../appraisal-forms.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-appraisal-forms-details',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './appraisal-forms-details.component.html',
  styleUrl: './appraisal-forms-details.component.css'
})
export class AppraisalFormsDetailsComponent implements OnInit{
  formId!:number;
  appraisalForms!:AppraisalForms;

  constructor(private appraisalFormsService:AppraisalFormsService,
    private router:Router,
    private activeRoute:ActivatedRoute
  ){}
  ngOnInit(): void {
    this.formId=this.activeRoute.snapshot.params['formId'];
    this.appraisalFormsService.get(this.formId).subscribe((response:AppraisalForms)=>{
      console.log("GET BY ID:: VIEW COMPONENT",response);
      this.appraisalForms=response;
    });
  }


}
