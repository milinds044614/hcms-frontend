// import { Component, OnInit } from '@angular/core';
// import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
// import { ApplicationStatusService } from '../application-status.service';

// import { CustomToasterService } from '../../custom-toaster/custom-toaster-service.service';
// import { ApplicationStatus } from '../application-status';
// import { CommonModule } from '@angular/common';
// import { Router, RouterModule } from '@angular/router';
// import { ToastrModule } from 'ngx-toastr';

// @Component({
//   selector: 'app-add-application-status',
//   standalone: true,
//   imports: [CommonModule,ReactiveFormsModule,RouterModule,ToastrModule],
//   templateUrl: './add-application-status.component.html',
//   styleUrl: './add-application-status.component.css'
// })
// export class AddApplicationStatusComponent implements OnInit {

//   form!:FormGroup;

//   constructor(private applicationStatusService:ApplicationStatusService,private router:Router,private customToasterService:CustomToasterService){}

//   ngOnInit(): void {
//     this.form=new FormGroup({
//     candidate:new FormControl(''),
//     vacancies: new FormControl(''),
//     status:new FormControl('',[Validators.required]),
//     applicationDate:new FormControl('',[Validators.required]),
//     applicationNotes: new FormControl('')

//     })
//   }
//   get formControl(){
//     return this.form.controls;
//   }
//   onSubmit(){
//     this.addApplicationStatus(this.form.value)
//   }
//   addApplicationStatus(applicationStatus:ApplicationStatus) {
//    this.applicationStatusService.create(applicationStatus).subscribe((response:any)=>{
//     this.customToasterService.success("Application Status Successfully ...","SUCCESS");
//     this.router.navigateByUrl('applicationStatus/list');
//    })
//   }
// }
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApplicationStatusService } from '../application-status.service';
import { CustomToasterService } from '../../custom-toaster/custom-toaster-service.service';
import { ApplicationStatus } from '../application-status';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';

@Component({
  selector: 'app-add-application-status',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,RouterModule,ToastrModule],
  templateUrl: './add-application-status.component.html',
  styleUrls: ['./add-application-status.component.css']
})
export class AddApplicationStatusComponent implements OnInit {

  form!: FormGroup;

  constructor(
    private applicationStatusService: ApplicationStatusService,
    private router: Router,
    private customToasterService: CustomToasterService
  ) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      candidate: new FormControl(null),  // Set default value to null
      vacancies: new FormControl(null),  // Set default value to null
      status: new FormControl('', [Validators.required]),
      applicationDate: new FormControl('', [Validators.required]),
      applicationNotes: new FormControl(null)  // Set default value to null
    });
  }

  get formControl() {
    return this.form.controls;
  }

  onSubmit() {
    this.addApplicationStatus(this.form.value);
  }

  addApplicationStatus(applicationStatus: ApplicationStatus) {
    this.applicationStatusService.create(applicationStatus).subscribe(
      (response: any) => {
        this.customToasterService.success("Application Status Successfully...", "SUCCESS");
        this.router.navigateByUrl('applicationStatus/list');
      },
      (error: any) => {
        this.customToasterService.error("Failed to add application status.", "ERROR");
      }
    );
  }
}
