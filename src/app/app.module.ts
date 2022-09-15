import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EmployeesComponent } from './employees/employees.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HrComponent } from './hr/hr.component';
import { HodComponent } from './hod/hod.component';
import { HigherLevelComponent } from './higher-level/higher-level.component';
import { CasualEmployeeComponent } from './casual-employee/casual-employee.component';
import { AuthGuard } from './_auth/auth.guard';
import { AuthInterceptor } from './_auth/auth.interceptor';
import { EmployeeService } from './_services/employee.service';
import { DepartmentsComponent } from './departments/departments.component';
import { AddDepartmentComponent } from './add-department/add-department.component';
import { EditDepartmentComponent } from './edit-department/edit-department.component';
import { LeavesTypeComponent } from './leaves-type/leaves-type.component';
import { EditLeaveTypeComponent } from './edit-leave-type/edit-leave-type.component';
import { AddLeaveTypeComponent } from './add-leave-type/add-leave-type.component';
import { LeavesComponent } from './leaves/leaves.component';
import { AddLeaveRequestComponent } from './add-leave-request/add-leave-request.component';
import { ApproveLeaveRequestComponent } from './approve-leave-request/approve-leave-request.component';
import { HodLeavesComponent } from './hod-leaves/hod-leaves.component';
import { EmployeeLeaveRequestsComponent } from './employee-leave-requests/employee-leave-requests.component';
import { HolidaysComponent } from './holidays/holidays.component';
import { AddHolidayComponent } from './add-holiday/add-holiday.component';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    AdminComponent,
    EmployeesComponent,
    EditEmployeeComponent,
    AddEmployeeComponent,
    HrComponent,
    HodComponent,
    HigherLevelComponent,
    CasualEmployeeComponent,
    DepartmentsComponent,
    AddDepartmentComponent,
    EditDepartmentComponent,
    LeavesTypeComponent,
    EditLeaveTypeComponent,
    AddLeaveTypeComponent,
    LeavesComponent,
    AddLeaveRequestComponent,
    ApproveLeaveRequestComponent,
    HodLeavesComponent,
    EmployeeLeaveRequestsComponent,
    HolidaysComponent,
    AddHolidayComponent,
    ViewEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    ToastrModule.forRoot({
      positionClass: 'toast-top-center',
      preventDuplicates: true
    }),
    BrowserAnimationsModule
  ],
  providers: [
    AuthGuard, 
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    EmployeeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
