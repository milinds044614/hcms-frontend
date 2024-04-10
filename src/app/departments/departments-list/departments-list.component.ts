import { Component } from '@angular/core';
import { department } from '../../../model/department.model';
import { DepartmentService } from '../../../services/department.service';

@Component({
  selector: 'app-departments-list',
  standalone: true,
  imports: [],
  templateUrl: './departments-list.component.html',
  styleUrl: './departments-list.component.css'
})
export class DepartmentsListComponent {
  departments: department[] = [];
  departmentsService: any;

  constructor(private departmentService:DepartmentService) { }

  ngOnInit(): void {
    this.getdepartments();
  }

  getdepartments(): void{
    this.departmentsService.getAll().subscribe((response: department[]) => this.departments = response);
  }


}
