// import { Component, OnInit } from '@angular/core';
// import { ApplicationStatus } from '../application-status';
// import { ApplicationStatusService } from '../application-status.service';
// import { ActivatedRoute, Router,RouterModule } from '@angular/router';

// import { CommonModule } from '@angular/common';
// @Component({
//   selector: 'app-application-status-details',
//   standalone: true,
//   imports: [CommonModule,RouterModule],
//   templateUrl: './application-status-details.component.html',
//   styleUrl: './application-status-details.component.css'
// })
// export class ApplicationStatusDetailsComponent  implements OnInit{
//   applicationId!:number;
//   applicationStatus!:ApplicationStatus;

//   constructor(private applicationStatusService:ApplicationStatusService,
//     private router:Router,private activateRoute:ActivatedRoute,

//   ){}
//   ngOnInit(): void {
//     this.applicationId=this.activateRoute.snapshot.params['applicationId'];
//     this.applicationStatusService.get(this.applicationId).subscribe((response:ApplicationStatus)=>{
//       console.log("GET BY ID::: VIEW COMPOMENT",response)
//       this.applicationStatus=response;
//     })
//   }
// }

import { Component, OnInit } from '@angular/core';
import { ApplicationStatus } from '../application-status';
import { ApplicationStatusService } from '../application-status.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  
  selector: 'app-application-status-details',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './application-status-details.component.html',
  styleUrls: ['./application-status-details.component.css']
})
export class ApplicationStatusDetailsComponent implements OnInit {
  applicationId!: number;
  applicationStatus!: ApplicationStatus;

  constructor(
    private applicationStatusService: ApplicationStatusService,
    private router: Router,
    private activateRoute: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.applicationId = this.activateRoute.snapshot.params['applicationId'];
    this.applicationStatusService.get(this.applicationId).subscribe((response: ApplicationStatus) => {
      console.log("GET BY ID::: VIEW COMPONENT", response);
      this.applicationStatus = response;
    });
  }
}
