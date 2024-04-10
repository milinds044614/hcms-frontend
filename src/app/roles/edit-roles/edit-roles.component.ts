import { Component, OnInit } from '@angular/core';
import { RolesService } from '../roles.service';

import { ActivatedRoute,Router } from '@angular/router';
import { CustomToasterService } from '../../custom-toaster/custom-toaster-service.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Role } from '../role';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-roles',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './edit-roles.component.html',
  styleUrl: './edit-roles.component.css'
})
export class EditRolesComponent implements OnInit {
  roleId!:number;
  updatedRole!:Role;
  form!:FormGroup;

  constructor(private roleService:RolesService,private router:Router,private activateRoute:ActivatedRoute,private customToasterService:CustomToasterService){}
  ngOnInit(): void {
   this.activateRoute.params.subscribe(params=>{
    this.roleId=params['rId'];
   })
   
   this.roleService.get(this.roleId).subscribe((response:Role)=>{
    console.log("GET BY ID",response)
    this.updatedRole=response;
   });
   this.form=new FormGroup({
    roleId:new FormControl(''),
    roleName:new FormControl('',[Validators.required]),
    description:new FormControl('',[Validators.required])
   })
  }

  get formControl(){
    return this.form.controls;
  }

  onSubmit(){
    this.editRole(this.form.value)
  }

  editRole(role:Role){
    this.roleService.update(role).subscribe((response:any)=>{
      this.customToasterService.info("DATA has been Updated","UPDATE");
      this.router.navigateByUrl('roles/list');
    })
  }
}
