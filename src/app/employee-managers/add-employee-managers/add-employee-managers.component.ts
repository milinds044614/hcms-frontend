import { Component, OnInit } from '@angular/core';
import { EmployeeManagersService } from '../employee-managers.service';
import { Router, RouterModule } from '@angular/router';
import { CustomToasterService } from '../../custom-toaster/custom-toaster-service.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';
import { EmployeeManagers } from '../employee-managers';


@Component({
  selector: 'app-add-employee-managers',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,RouterModule,ToastrModule],
  templateUrl: './add-employee-managers.component.html',
  styleUrl: './add-employee-managers.component.css'
})
export class AddEmployeeManagersComponent implements OnInit {
  form!: FormGroup;
  constructor(private employeeManageService:EmployeeManagersService,private router:Router,private customeToasterService:CustomToasterService){}

  ngOnInit(): void {
    this.form=new FormGroup({
      
      employee: new FormControl(''), 
      manager: new FormControl(''),
      relationshipType: new FormControl('') 
    })
  }

  get formControl(){
    return this.form.controls;
  }
  onSubmit(){
    this.addEmployeeManager(this.form.value);
  }
  addEmployeeManager(employeeManager:EmployeeManagers) {
    this.employeeManageService.create(employeeManager).subscribe((response:any)=>{
      this.customeToasterService.success("Employee manager created successfully...","SUCCESS");
      this.router.navigateByUrl('employeeManagers/list');
    })
  }
}
