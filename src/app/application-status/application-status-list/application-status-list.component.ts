import { Component } from '@angular/core';
import { ApplicationStatus } from '../application-status';
import { ApplicationStatusService } from '../application-status.service';
import { Router, RouterModule } from '@angular/router';
import { CustomToasterService } from '../../custom-toaster/custom-toaster-service.service';


import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-application-status-list',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './application-status-list.component.html',
  styleUrl: './application-status-list.component.css'
})
export class ApplicationStatusListComponent {

  applicationStatus:ApplicationStatus[]=[];
  constructor(private applicationStatusService:ApplicationStatusService,
    private router:Router,
    private customToasterService:CustomToasterService
  ){}

  ngOnInit():void{
    this.getAllAppliationStatus();
    
  }
  getAllAppliationStatus() {
   this.applicationStatusService.getAll().subscribe((response:ApplicationStatus[])=>{
    this.applicationStatus=response;
   })
  }

  refreshPage(url:string){
    this.router.navigateByUrl('/',{skipLocationChange:true}).then(()=>{
      this.router.navigate([url]);
    });
  }

  deleteApplicationStatus(applicationId:number){
    this.applicationStatusService.delete(applicationId).subscribe(response=>{
      console.log('Applications::',this.applicationStatus);
      this.customToasterService.warning(`Delete Application with id:'${applicationId}`,"DELETED");
      this.refreshPage('/projects/list');
    })
  }

  editAppicationStatus( applicationId:number):number{
    this.router.navigate(['/applicationStatus/edit',{apId:applicationId}]);
    return applicationId;
  }
}
