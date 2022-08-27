import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Leave } from '../_model/leave';
import { EmployeeAuthService } from '../_services/employee-auth.service';
import { EmployeeService } from '../_services/employee.service';

@Component({
  selector: 'app-approve-leave-request',
  templateUrl: './approve-leave-request.component.html',
  styleUrls: ['./approve-leave-request.component.css']
})
export class ApproveLeaveRequestComponent implements OnInit {

  leaveRequest: Leave = new Leave(
    0,
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    ''
  );

  leaveId: number = this.employeeAuthService.getIdToUpdate();
  approverId: number = this.employeeAuthService.getEmployeeId();

  constructor(private employeeService: EmployeeService, private employeeAuthService: EmployeeAuthService, private router: Router) { }

  ngOnInit(): void {
  }

  getLeaveRequestById() {
    this.employeeService.getLeaveRequestById(this.leaveId).subscribe(
      response => {
        this.leaveRequest = response;
        console.log(this.leaveRequest);
      }
    );
  }

  approveLeaveRequest() {
    if (this.leaveRequest.status != "") {
      this.employeeService.updateLeaveRequest(this.leaveId, this.leaveRequest, this.approverId).subscribe(
        response => {
          console.log(response);  
          // this.router.navigate(['/leaves']);
          this.leaveRequest.status = "";

        }
      );
    } else {
      alert("Please select a status");
    }
  }


}
