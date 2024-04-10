import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-employee-details',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './employee-details.component.html',
  styleUrl: './employee-details.component.css'
})
export class EmployeeDetailsComponent implements OnInit {
  employeeId!:number;
  employee!:Employee;
  constructor(private employeeService:EmployeeService,private router:Router,private activeRoute:ActivatedRoute){}
  ngOnInit(): void {
    this.employeeId=this.activeRoute.snapshot.params['employeeId'];
    this.employeeService.get(this.employeeId).subscribe((response:Employee)=>{
      console.log("GET BY ID :: VIEW COMPONENT",response)
      this.employee=response;
    });
  }
  

}
