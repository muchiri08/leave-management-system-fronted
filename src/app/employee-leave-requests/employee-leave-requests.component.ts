import { Component, OnInit } from '@angular/core';
import { Leave } from '../_model/leave';
import { EmployeeAuthService } from '../_services/employee-auth.service';
import { EmployeeService } from '../_services/employee.service';

@Component({
  selector: 'app-employee-leave-requests',
  templateUrl: './employee-leave-requests.component.html',
  styleUrls: ['./employee-leave-requests.component.css']
})
export class EmployeeLeaveRequestsComponent implements OnInit {

  leaves: Array<Leave> = new Array<Leave>();
  id: number = this.employeeAuthService.getEmployeeId();

  constructor(private employeeService: EmployeeService, private employeeAuthService: EmployeeAuthService) {
    this.getEmployeeLeaveRequests();
   }

  ngOnInit(): void {
  }

  getEmployeeLeaveRequests() {
    this.employeeService.getEmployeeLeaves(this.id).subscribe(
      response => {
        this.leaves = response;
        console.log(this.leaves);
      }
    );
  }

}
