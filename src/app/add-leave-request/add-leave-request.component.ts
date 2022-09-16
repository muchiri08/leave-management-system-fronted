import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LeaveType } from '../_model/leave-type';
import { EmployeeAuthService } from '../_services/employee-auth.service';
import { EmployeeService } from '../_services/employee.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-leave-request',
  templateUrl: './add-leave-request.component.html',
  styleUrls: ['./add-leave-request.component.css']
})
export class AddLeaveRequestComponent implements OnInit {

  leaveTypes: Array<LeaveType> = new Array<LeaveType>();
  id: number = this.employeeAuthService.getEmployeeId();
  empId: number = this.employeeAuthService.getIdToUpdate();

  constructor(private employeeService: EmployeeService, private employeeAuthService: EmployeeAuthService, private toastr: ToastrService) {
    this.getLeaveTypes();
   }

  ngOnInit(): void {
  }

  getLeaveTypes() {
    this.employeeService.getLeavesType().subscribe(
      response => {
        this.leaveTypes = response;
      }
    );
  }

  createLeaveRequest(form: NgForm){
    if(form.valid){
      if(this.isRoleMatch('ADMIN') || this.isRoleMatch('HR')){
        this.employeeService.createLeaveRequest(this.empId, form.value).subscribe(
          response => {
            form.reset();
            this.toastr.success('Leave request created successfully');
          }
        );
      } else {
        this.employeeService.createLeaveRequest(this.id, form.value).subscribe(
          response => {
            form.reset();
            this.toastr.success('Leave request created successfully');
          }
        );
      }
    } else {
      this.toastr.error('Please fill in all the fields');
    }
  }
  
  isRoleMatch(role: string){
    return this.employeeService.roleMatch(role);
  }

}
