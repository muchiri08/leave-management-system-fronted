import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Emp2 } from '../_model/emp2';
import { Employee } from '../_model/employee';
import { EmployeeAuthService } from '../_services/employee-auth.service';
import { EmployeeService } from '../_services/employee.service';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css']
})
export class ViewEmployeeComponent implements OnInit {

  id: number = this.employeeAuthService.getIdToUpdate();
  employee: Employee | undefined;
  employeeLeaveBalance: number | undefined;

  constructor(private employeeAuthService: EmployeeAuthService, private employeeService: EmployeeService, private router: Router) {
    this.getEmployeeById();
    this.getLeaveBalance();
  }

  ngOnInit(): void {
  }

  getEmployeeById() {
    this.employeeService.getEmployeeById(this.id).subscribe(
      data => {
        this.employee = data;
      }
    );
  }

  getLeaveBalance() {
    this.employeeService.getLeaveBalance(this.id).subscribe(
      balance => {
        this.employeeLeaveBalance = balance;
      }
    );
  }

  applyLeaveOnBehalfOfEmployee() {
    this.router.navigate([`/leaves/create-leave-request`]);
  }
}
