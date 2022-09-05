import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './_auth/auth.guard';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { EmployeesComponent } from './employees/employees.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { HrComponent } from './hr/hr.component';
import { HodComponent } from './hod/hod.component';
import { HigherLevelComponent } from './higher-level/higher-level.component';
import { CasualEmployeeComponent } from './casual-employee/casual-employee.component';
import { DepartmentsComponent } from './departments/departments.component';
import { AddDepartmentComponent } from './add-department/add-department.component';
import { EditDepartmentComponent } from './edit-department/edit-department.component';
import { LeavesTypeComponent } from './leaves-type/leaves-type.component';
import { AddLeaveTypeComponent } from './add-leave-type/add-leave-type.component';
import { EditLeaveTypeComponent } from './edit-leave-type/edit-leave-type.component';
import { LeavesComponent } from './leaves/leaves.component';
import { AddLeaveRequestComponent } from './add-leave-request/add-leave-request.component';
import { ApproveLeaveRequestComponent } from './approve-leave-request/approve-leave-request.component';
import { HodLeavesComponent } from './hod-leaves/hod-leaves.component';
import { EmployeeLeaveRequestsComponent } from './employee-leave-requests/employee-leave-requests.component';
import { HolidaysComponent } from './holidays/holidays.component';
import { AddHolidayComponent } from './add-holiday/add-holiday.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard], data: { role: ['ADMIN'] } },
  { path: 'hr', component: HrComponent, canActivate: [AuthGuard], data: { role: ['HR'] } },
  { path: 'hod', component: HodComponent, canActivate: [AuthGuard], data: { role: ['HOD'] } },
  { path: 'higher-level', component: HigherLevelComponent, canActivate: [AuthGuard], data: { role: ['HIGHER_LEVEL'] } },
  { path: 'casual-employee', component: CasualEmployeeComponent, canActivate: [AuthGuard], data: { role: ['CASUAL_EMPLOYEE'] } },
  { path: 'employees', component: EmployeesComponent, canActivate: [AuthGuard], data: { role: ['ADMIN', 'HR', 'HIGHER_LEVEL', 'HOD'] } },
  { path: 'employees/add-employee', component: AddEmployeeComponent, canActivate: [AuthGuard], data: { role: ['ADMIN', 'HR'] } },
  { path: 'employees/edit-employee/:id', component: EditEmployeeComponent, canActivate: [AuthGuard], data: { role: ['ADMIN', 'HR'] } },
  { path: 'departments', component: DepartmentsComponent, canActivate: [AuthGuard], data: { role: ['ADMIN', 'HR', 'HIGHER_LEVEL'] } },
  { path: 'departments/add-department', component: AddDepartmentComponent, canActivate: [AuthGuard], data: { role: ['ADMIN', 'HR'] } },
  { path: 'departments/edit-department/:id', component: EditDepartmentComponent, canActivate: [AuthGuard], data: { role: ['ADMIN', 'HR'] } },
  { path: 'leaves-type', component: LeavesTypeComponent, canActivate: [AuthGuard], data: { role: ['ADMIN', 'HR', 'HIGHER_LEVEL', 'HOD', 'CASUAL_EMPLOYEE'] } },
  { path: 'leaves-type/add-leave-type', component: AddLeaveTypeComponent, canActivate: [AuthGuard], data: { role: ['ADMIN', 'HR'] } },
  { path: 'leaves-type/edit-leave-type/:id', component: EditLeaveTypeComponent, canActivate: [AuthGuard], data: { role: ['ADMIN', 'HR'] } },
  { path: 'leaves', component: LeavesComponent, canActivate: [AuthGuard], data: { role: ['ADMIN', 'HR', 'HOD', 'HIGHER_LEVEL'] } },
  { path: 'leaves/create-leave-request', component: AddLeaveRequestComponent, canActivate: [AuthGuard], data: { role: ['ADMIN', 'HR', 'HOD', 'CASUAL_EMPLOYEE'] } },
  { path: 'leaves/approve-leave-request', component: ApproveLeaveRequestComponent, canActivate: [AuthGuard], data: { role: ['ADMIN', 'HR', 'HOD'] } },
  { path: 'hod-leaves', component: HodLeavesComponent, canActivate: [AuthGuard], data: { role: ['HR'] } },
  { path: 'my-leave-requests', component: EmployeeLeaveRequestsComponent, canActivate: [AuthGuard], data: { role: ['HR', 'HOD', 'CASUAL_EMPLOYEE'] } },
  { path: 'holidays', component: HolidaysComponent, canActivate: [AuthGuard], data: { role: ['ADMIN', 'HR', 'HIGHER_LEVEL', 'HOD', 'CASUAL_EMPLOYEE'] } },
  { path: 'holidays/add-holiday', component: AddHolidayComponent, canActivate: [AuthGuard], data: { role: ['ADMIN', 'HR'] } },
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
