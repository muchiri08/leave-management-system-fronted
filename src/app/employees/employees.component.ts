import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faUserPen } from '@fortawesome/free-solid-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { Employee } from '../_model/employee';
import { EmployeeAuthService } from '../_services/employee-auth.service';
import { EmployeeService } from '../_services/employee.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  editIcon = faUserPen;
  viewIcon = faEye;
  deleteIcon = faTrashCan;

  employees: Array<Employee> = new Array<Employee>();
  id = this.employeeAuthService.getEmployeeId();

  constructor( private employeeService: EmployeeService, private employeeAuthService: EmployeeAuthService, private router: Router) { 
    this.getEmployees();
   }

  ngOnInit(): void {
  }

  getEmployees() {
    if(this.isRoleMatch('HOD')){
      this.employeeService.getEmployeesByDepartment(this.id).subscribe(
        response => {
          this.employees = response;;
        }
      );
    } else {
      this.employeeService.getEmployees().subscribe(
        data => {
          this.employees = data;
        }
      );
    }
  }

  saveEmployeeIdToLocalStorage(id: number) {
    this.employeeAuthService.setIdToUpdate(id);
    this.router.navigate([`/employees/edit-employee/:${id}`]);
  }

  deleteEmployee(id: number) {
    if (confirm('Are you sure you want to delete this employee?')) {
      this.employeeService.deleteEmployee(id).subscribe(
        response => {
          this.employees = this.employees.filter(employee => employee.getId() !== id); 
        }
      );
    }
  }

  isRoleMatch(allowedRole: string) {
    return this.employeeService.roleMatch(allowedRole);
  }

}
