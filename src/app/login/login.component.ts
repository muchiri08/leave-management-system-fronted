import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeAuthService } from '../_services/employee-auth.service';
import { EmployeeService } from '../_services/employee.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private employeeService: EmployeeService, private employeeAuthService: EmployeeAuthService, private router: Router) { }

  ngOnInit(): void {
  }

  login(loginForm: NgForm) {
    if(loginForm.valid) {
      this.employeeService.login(loginForm.value).subscribe(
        (response: any) => {
          console.log(response);
          this.employeeAuthService.setRole(response.employee.role.roleName);
          this.employeeAuthService.setToken(response.jwtToken);
          this.employeeAuthService.setEmployeeId(response.employee.employeeId);

          if (response.employee.role.roleName === 'ADMIN') {
            this.router.navigate(['/admin']);
          } else if (response.employee.role.roleName === 'HR') {
            this.router.navigate(['/hr']);
          } else if (response.employee.role.roleName === 'HIGHER_LEVEL'){
            this.router.navigate(['/higher-level']);
          } else if (response.employee.role.roleName === 'HOD'){
            this.router.navigate(['/hod']);
          } else if (response.employee.role.roleName === 'CASUAL_EMPLOYEE'){
            this.router.navigate(['/casual-employee']);
          }
        },
        (error) => {
          console.log(error);
          if (error.status === 401) {
            alert('Invalid username or password');
            console.log(error.message);
          }
        }
      );
    } else {
      alert('Please fill in all the fields');
    }
  }

}
