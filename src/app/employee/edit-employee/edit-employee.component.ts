import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomToasterService } from '../../custom-toaster/custom-toaster-service.service';
import { response } from 'express';
import { Employee } from '../employee';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './edit-employee.component.html',
  styleUrl: './edit-employee.component.css'
})
export class EditEmployeeComponent implements OnInit{
  employeeId!: number;
  form!: FormGroup;
  updatedEmployee!:Employee;
 
  constructor(private employeeService:EmployeeService,private router:Router,private activateRoute:ActivatedRoute,private customToasterService:CustomToasterService){}
  
  ngOnInit(): void {
   this.activateRoute.params.subscribe(params=>{
    this.employeeId=params['eId'];
   });
   this.employeeService.get(this.employeeId).subscribe((response:Employee)=>{
    console.log("GET BY ID",response)
   });
   this.form=new FormGroup({
    employeeId:new FormControl(''),
    firstName:new FormControl('',[Validators.required]),
    lastName:new FormControl('',[Validators.required]),
    gender:new FormControl('',[Validators.required]),
    dateOfBirth:new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required]),
    phone: new FormControl('',[Validators.required]),
    address: new FormControl('',[Validators.required]),
    nationalId: new FormControl('',[Validators.required]),
    maritalStatus: new FormControl('',[Validators.required]),
    emergencyContactName:new FormControl('',[Validators.required]),
    emergencyContactPhone: new FormControl('',[Validators.required]),
    department: new FormControl(''),
    position:new FormControl('',[Validators.required]),
    skillSet: new FormControl('',[Validators.required]),
    employmentStartDate: new FormControl('',[Validators.required]),
    employmentEndDate: new FormControl(''),
    salary: new FormControl('',[Validators.required]),
    employmentStatus: new FormControl('',[Validators.required]),
    bankAccountNumber: new FormControl('',[Validators.required]),
    manager: new FormControl(''),
    role:new FormControl(''),
    


   })

  }

  get formControl(){
    return this.form.controls;
  }

  onSubmit(){
    console.log(this.form.value);
    this.editEmployee(this.form.value)
  }
  editEmployee(employee:Employee) {
   this.employeeService.update(employee).subscribe((response:any)=>{
    console.log("UPDATED VALUE: ",response);
    this.customToasterService.info("Data has been Updated","UPDATE");
    this.router.navigateByUrl('employees/list');
   })
  }


}
