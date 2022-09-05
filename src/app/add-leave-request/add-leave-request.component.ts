import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LeaveType } from '../_model/leave-type';
import { EmployeeAuthService } from '../_services/employee-auth.service';
import { EmployeeService } from '../_services/employee.service';

@Component({
  selector: 'app-add-leave-request',
  templateUrl: './add-leave-request.component.html',
  styleUrls: ['./add-leave-request.component.css']
})
export class AddLeaveRequestComponent implements OnInit {

  leaveTypes: Array<LeaveType> = new Array<LeaveType>();
  id: number = this.employeeAuthService.getEmployeeId();

  constructor(private employeeService: EmployeeService, private employeeAuthService: EmployeeAuthService) {
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
      this.employeeService.createLeaveRequest(this.id, form.value).subscribe(
        response => {
          form.reset();
        }
      );
    } else {
      alert('Please fill in all the fields');
    }
  }

}
