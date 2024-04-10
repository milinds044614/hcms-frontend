import { Component, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';

import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';


import { Router, RouterModule } from '@angular/router';
import { CustomToasterService } from '../../custom-toaster/custom-toaster-service.service';


@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees: Employee[] = [];
  
  constructor(private employeeService: EmployeeService,private router:Router,private customToasterService:CustomToasterService) { }

  ngOnInit(): void {
    this.getEmployees();
    
  }
  
  getEmployees(): void {
    this.employeeService.getAll().subscribe((response:Employee[]) =>{
      this.employees=response;
    });
  }

  refreshPage(url:string):void {
    this.router.navigateByUrl('/',{skipLocationChange:true}).then(()=>{
      this.router.navigate([url]);
    });
  }

  deleteEmployee(employeeId:number):void{
    this.employeeService.delete(employeeId).subscribe(response=>{
      console.log('EMPLOYEES::',this.employees);
      this.customToasterService.warning(`Delete Employee with ID:'${employeeId}`,"DELETED");
      this.refreshPage('/employees/list');
    })
  }

  editEmployee(employeeId:number):void {
    this.router.navigate(['/employees/edit',{eId:employeeId}]);
    
  }


}
