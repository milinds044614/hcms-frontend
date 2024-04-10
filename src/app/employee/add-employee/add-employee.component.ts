
import { EmployeeService } from '../employee.service';
import { Departments } from '../../departments/department';
import { Role } from '../../roles/role';
import { DepartmentsService } from '../../departments/departments.service';
import { RolesService } from '../../roles/roles.service';
import { Component, NgModule, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';

import { CustomToasterService } from '../../custom-toaster/custom-toaster-service.service';
import { Router, RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import { Employee } from '../employee';
@Component({
  selector: 'app-add-employee',
 // providers: [provideNativeDateAdapter],
  standalone: true,
  imports: [FormsModule, CommonModule,ReactiveFormsModule,RouterModule,ToastrModule],
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {


  empManagerName: string = '';
  roleName: string = '';
  departmentName: string = '';

  employee: Employee = {

    firstName: '',
    lastName: '',
    gender: '',
    dateOfBirth: new Date(),
    email: '',
    phone: '',
    address: '',
    nationalId: '',
    maritalStatus: '',
    emergencyContactName: '',
    emergencyContactPhone: '',
    department: null,
    position: '',
    skillSet: '',
    employmentStartDate: new Date(),
    employmentEndDate: null,
    salary: '',
    employmentStatus: '',
    bankAccountNumber: '',
    manager: null,
    role: null

  };
  //obj
  employees: Employee[] = [];
  departments: Departments[] = [];
  roles: Role[] = [];
  

  //services injected 
  constructor(
    private employeeService: EmployeeService,
    private departmentService: DepartmentsService,
    private roleService: RolesService,
    private customToasterService: CustomToasterService,
    private router: Router) { }

  ngOnInit(): void {
    this.getDepartments();
    this.getEmployees();
    this.getRoles();
  }

  getEmployees(): void {
    this.employeeService.getAll().subscribe(response => this.employees = response);
  }

  getDepartments(): void {
    this.departmentService.getAll().subscribe(response => this.departments = response);
  }

  getRoles(): void {
    this.roleService.getAll().subscribe(response => this.roles = response);
  }


  addEmployee(): void {
       const empId = parseInt(this.empManagerName.split(" ")[0]);
       const deptId = parseInt(this.departmentName.split(" ")[0]);
       const roleId = parseInt(this.roleName.split(" ")[0]);
       this.employeeService.get(empId).subscribe(resp => {
         this.employee.manager = resp;
         this.roleService.get(roleId).subscribe(roleResponse => {
           this.employee.role = roleResponse
           this.departmentService.get(deptId).subscribe(deptResponse => {
             this.employee.department = deptResponse;
             this.employeeService.create(this.employee).subscribe(() => {
               console.log('Employee ADDED --', this.employee);
               this.customToasterService.success("Employee added Successfully...","SUCCESS");
              this.router.navigateByUrl('employees/list');
           });
           });
         });
       });
     }


  }


function provideNativeDateAdapter(): import("@angular/core").Provider {
  throw new Error('Function not implemented.');
}

