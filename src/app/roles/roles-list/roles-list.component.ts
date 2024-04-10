import { Component, OnInit } from '@angular/core';
import { Role } from '../role';
import { RolesService } from '../roles.service';

import { CustomToasterService } from '../../custom-toaster/custom-toaster-service.service';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-roles-list',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './roles-list.component.html',
  styleUrl: './roles-list.component.css'
})
export class RolesListComponent implements OnInit{

  role:Role[]=[];

  constructor(private roleService:RolesService,private router:Router,private customToasterService:CustomToasterService){}
  ngOnInit(): void {
    this.getAllRole();
  }
  getAllRole() {
    this.roleService.getAll().subscribe((response:Role[])=>{
      this.role=response;
    });
  }
  refreshPage(url: string) {
      this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
        this.router.navigate([url]);
      });
  }

  deleteRole(roleId:number){
    this.roleService.delete(roleId).subscribe(response=>{
      this.customToasterService.warning(`Delete role with ID:'${roleId}`,"DELETED")
      this.refreshPage('roles/list');
    })
  }
  editRole(roleId:number) {
    this.router.navigate(['/roles/edit',{rId:roleId}]);
    }
  

  


}
