import { Component, OnInit } from '@angular/core';
import { LeaveType } from '../_model/leave-type';
import { EmployeeService } from '../_services/employee.service';

@Component({
  selector: 'app-add-leave-type',
  templateUrl: './add-leave-type.component.html',
  styleUrls: ['./add-leave-type.component.css']
})
export class AddLeaveTypeComponent implements OnInit {

  leaveType: LeaveType = new LeaveType(
    parseInt(''),
    '',
    0
  );

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
  }

  addLeaveType() {
    if(this.leaveType.leaveName != '' && this.leaveType.numOfDays != 0) {
      this.employeeService.createLeaveType(this.leaveType).subscribe(
        data => {
          this.leaveType.leaveName = '';
          this.leaveType.numOfDays = 0;
        }
      );
    } else {
      alert('Please fill all the fields');
    }
  }

}
