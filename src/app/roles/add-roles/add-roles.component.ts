import { Component, OnInit } from '@angular/core';

import { CustomToasterService } from '../../custom-toaster/custom-toaster-service.service';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { Role } from '../role';
import { RolesService } from '../roles.service';
import { response } from 'express';

@Component({
  selector: 'app-add-roles',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,RouterModule,ToastrModule],
  templateUrl: './add-roles.component.html',
  styleUrl: './add-roles.component.css'
})
export class AddRolesComponent implements OnInit {
  form!: FormGroup;
  constructor(private roleService:RolesService,private router:Router,private customerToasterService:CustomToasterService){}
  ngOnInit(): void {
   this.form=new FormGroup({
    roleName:new FormControl('',[Validators.required]),
    roleDescription:new FormControl()
    
   })
  }

  get formControl(){
    return this.form.controls;
  }

  onSubmit(){
    console.log(this.form.value);
    this.addRole(this.form.value)
  }
  addRole(role:Role) {
    this.roleService.create(role).subscribe((response)=>{
      this.customerToasterService.success("Role Created Successfully....","SUCCESS");
      this.router.navigateByUrl('roles/list');
    })
  }

}
