import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../_services/employee.service';
import { EmployeeAuthService } from '../_services/employee-auth.service';
import { Emp2 } from '../_model/emp2';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {


  employee: Emp2 = new Emp2(
    0,
    '',
    '',
    '',
    '',
    '',
    '',
    '',
  );
  
  id = this.employeeAuthService.getIdToUpdate();

  constructor(private employeeService: EmployeeService, private employeeAuthService: EmployeeAuthService, private router: Router) { 
    this.getEmployeeById(this.id);
  }

  ngOnInit(): void {
  }

  getEmployeeById(id: number) {
    id = this.id;
    console.log(id);
    return this.employeeService.getEmployeeById(id).subscribe(
      (data: any) => {
        this.employee = data;
        console.log(this.employee);
      }
    );
  }


  updateEmployee(id:number, employee: NgForm) {
      if (employee.valid){
        this.employeeService.updateEmployee(id, employee.value).subscribe(
          response => {
            console.log(response);
            this.router.navigate(['/employees']);
          }
        );
      } else {
        alert('All field are required');
      }
  }

  isRoleMatch(role: string){
    return this.employeeService.roleMatch(role);
  }

}
