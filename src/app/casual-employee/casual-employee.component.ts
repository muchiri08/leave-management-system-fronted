import { Component, OnInit } from '@angular/core';
import { faArrowRightFromBracket, faCalendarDays, faHourglass2, faList } from '@fortawesome/free-solid-svg-icons';
import { EmployeeAuthService } from '../_services/employee-auth.service';
import { EmployeeService } from '../_services/employee.service';

@Component({
  selector: 'app-casual-employee',
  templateUrl: './casual-employee.component.html',
  styleUrls: ['./casual-employee.component.css']
})
export class CasualEmployeeComponent implements OnInit {

  leaveTypeIcon = faArrowRightFromBracket;
  leaveRequestsIcon = faList;
  holidaysIcon = faCalendarDays;
  balanceIcon = faHourglass2;

  employeeId: number = this.employeeAuthService.getEmployeeId();
  employeeLeaveBalance: number = 0;

  constructor(private employeeService: EmployeeService, private employeeAuthService: EmployeeAuthService) { 
    this.getLeaveBalance();
  }

  ngOnInit(): void {
  }

  public getLeaveBalance() {
    this.employeeService.getLeaveBalance(this.employeeId).subscribe(
      data => {
        console.log(data);
        this.employeeLeaveBalance = data;
      }
    );
  }

}
