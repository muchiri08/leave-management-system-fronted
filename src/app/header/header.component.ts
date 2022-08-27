import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeAuthService } from '../_services/employee-auth.service';
import { EmployeeService } from '../_services/employee.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private employeeAuthService: EmployeeAuthService, private router: Router, public employeeService: EmployeeService) { }

  ngOnInit(): void {
  }

  returnHome(role: string) {
    if(role === 'ADMIN') {
      this.router.navigate(['/admin']);
    } else if(role === 'CASUAL_EMPLOYEE') {
      this.router.navigate(['/casual-employee']);
    } else if(role === 'HR'){
      this.router.navigate(['/hr']);
    } else if(role === 'HIGHER_LEVEL'){
      this.router.navigate(['/higher-level']);
    } else if(role === 'HOD'){
      this.router.navigate(['/hod']);
    }
  }

  public logout() {
    this.employeeAuthService.clear();
    this.router.navigate(['/login']);
  }

}
