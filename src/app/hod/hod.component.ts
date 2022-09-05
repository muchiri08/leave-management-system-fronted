import { Component, OnInit } from '@angular/core';
import { faArrowRightFromBracket, faCalendarDays, faHourglass2, faHouse, faList, faUsers } from '@fortawesome/free-solid-svg-icons';
import { EmployeeAuthService } from '../_services/employee-auth.service';
import { EmployeeService } from '../_services/employee.service';

@Component({
  selector: 'app-hod',
  templateUrl: './hod.component.html',
  styleUrls: ['./hod.component.css']
})
export class HodComponent implements OnInit {

  employeesIcon = faUsers;
  departmentIcon = faHouse;
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
