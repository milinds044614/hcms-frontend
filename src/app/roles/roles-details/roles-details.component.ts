import { Component } from '@angular/core';
import { Role } from '../role';
import { RolesService } from '../roles.service';
import { ActivatedRoute, Router } from '@angular/router';
import { response } from 'express';

@Component({
  selector: 'app-roles-details',
  standalone: true,
  imports: [],
  templateUrl: './roles-details.component.html',
  styleUrl: './roles-details.component.css'
})
export class RolesDetailsComponent {
  roleId!:number;
  role!:Role;

  constructor(private roleService:RolesService,private router:Router,private activateRoute:ActivatedRoute){}

  ngOnInit():void{
    this.roleId=this.activateRoute.snapshot.params['roleId'];
    this.roleService.get(this.roleId).subscribe((response:Role)=>{
      this.role=response;
    });
  }

}
