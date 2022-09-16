import { Component, OnInit } from '@angular/core';
import { LeaveType } from '../_model/leave-type';
import { EmployeeAuthService } from '../_services/employee-auth.service';
import { EmployeeService } from '../_services/employee.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-leave-type',
  templateUrl: './edit-leave-type.component.html',
  styleUrls: ['./edit-leave-type.component.css']
})
export class EditLeaveTypeComponent implements OnInit {

  id = this.employeeAuthService.getIdToUpdate();
  leaveType: LeaveType = new LeaveType(
    0,
    '',
    0
  );

  constructor(private employeeService: EmployeeService, private employeeAuthService: EmployeeAuthService, private toastr: ToastrService) { 
    this.getLeaveTypeById();
  }

  ngOnInit(): void {
  }

  getLeaveTypeById() {
    this.employeeService.getLeaveTypeById(this.id).subscribe(
      response => {
        this.leaveType = response;
        console.log(this.leaveType);
      }
    )
  }

  updateLeaveType() {
    if(this.leaveType.leaveName != '' && this.leaveType.numOfDays != 0) {
      this.employeeService.updateLeaveType(this.id ,this.leaveType).subscribe(
        response => {
          this.leaveType.leaveName = '';
          this.leaveType.numOfDays = 0;
          this.toastr.success('Leave type updated successfully');
        }
      );
    } else {
      this.toastr.error('Please fill all the fields');
    }
  }

}
