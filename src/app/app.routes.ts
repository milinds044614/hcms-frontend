import { Routes } from '@angular/router';
import { ProjectsListComponent } from './projects/projects-list/projects-list.component';
import { AddProjectsComponent } from './projects/add-projects/add-projects.component';
import { EditProjectsComponent } from './projects/edit-projects/edit-projects.component';
import { ViewProjectDetailsComponent } from './projects/view-project-details/view-project-details.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './employee/employee-details/employee-details.component';
import { AddEmployeeComponent } from './employee/add-employee/add-employee.component';
import { EditEmployeeComponent } from './employee/edit-employee/edit-employee.component';
import { RolesListComponent } from './roles/roles-list/roles-list.component';
import { AddRolesComponent } from './roles/add-roles/add-roles.component';
import { EditRolesComponent } from './roles/edit-roles/edit-roles.component';
import { RolesDetailsComponent } from './roles/roles-details/roles-details.component';
import { ApplicationStatusListComponent } from './application-status/application-status-list/application-status-list.component';
import { AddApplicationStatusComponent } from './application-status/add-application-status/add-application-status.component';
import { EditApplicationStatusComponent } from './application-status/edit-application-status/edit-application-status.component';
import { ApplicationStatusDetailsComponent } from './application-status/application-status-details/application-status-details.component';
import { AppraisalFormsListComponent } from './appraisal-forms/appraisal-forms-list/appraisal-forms-list.component';
import { AddAppraisalFormsComponent } from './appraisal-forms/add-appraisal-forms/add-appraisal-forms.component';
import { EditAppraisalFormsComponent } from './appraisal-forms/edit-appraisal-forms/edit-appraisal-forms.component';
import { AppraisalFormsDetailsComponent } from './appraisal-forms/appraisal-forms-details/appraisal-forms-details.component';


export const routes: Routes = [
     // main route - > index page - main page - first page - DASHBAORD
    { path: '', redirectTo: '/employees', pathMatch: 'full' },

    //employee
    { path: 'employees/list', component: EmployeeListComponent },
    { path: 'employees/:employeeId/view', component: EmployeeDetailsComponent },
    { path: 'employees/add', component: AddEmployeeComponent },
    { path: 'employees/edit', component: EditEmployeeComponent },
    { path: 'employees', redirectTo: '/employees/list', pathMatch: 'full' },
   
    // projects
    { path: 'projects/list', component: ProjectsListComponent },
    { path: 'projects/add', component: AddProjectsComponent },
    { path: 'projects/edit', component: EditProjectsComponent },
    { path: 'projects/:projectId/view', component: ViewProjectDetailsComponent },
    { path: 'projects', redirectTo: '/projects/list', pathMatch: 'full' },
    //roles
    { path: 'roles/list', component: RolesListComponent },
    { path: 'roles/add', component: AddRolesComponent },
    { path: 'roles/edit', component: EditRolesComponent },
    { path: 'roles/:roleId/view', component: RolesDetailsComponent },
    { path: 'roles', redirectTo: '/roles/list', pathMatch: 'full' },
    //APPLICATION STATUS
    { path: 'applicationStatus/list', component: ApplicationStatusListComponent },
    { path: 'applicationStatus/add', component: AddApplicationStatusComponent },
    { path: 'applicationStatus/edit', component: EditApplicationStatusComponent },
    { path: 'applicationStatus/:roleId/view', component: ApplicationStatusDetailsComponent },
    { path: 'applicationStatus', redirectTo: '/applicationStatus/list', pathMatch: 'full' },
    //APPRAISAL FORMS 
    { path: 'appraisalForms/list', component: AppraisalFormsListComponent },
    { path: 'appraisalForms/add', component: AddAppraisalFormsComponent },
    { path: 'appraisalForms/edit', component: EditAppraisalFormsComponent },
    { path: 'appraisalForms/:roleId/view', component: AppraisalFormsDetailsComponent },
    { path: 'appraisalForms', redirectTo: '/appraisalForms/list', pathMatch: 'full' },

];
