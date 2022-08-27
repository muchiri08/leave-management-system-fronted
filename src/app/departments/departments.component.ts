import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faFilePen } from '@fortawesome/free-solid-svg-icons';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { Department } from '../_model/department';
import { EmployeeAuthService } from '../_services/employee-auth.service';
import { EmployeeService } from '../_services/employee.service';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit {

  editIcon = faFilePen;
  deleteIcon = faTrashCan;

  departments: Array<Department> = new Array<Department>();

  constructor(private employeeService: EmployeeService, private router: Router, private employeeAuthService: EmployeeAuthService) { 
    this.getDepartments();
  }

  ngOnInit(): void {
  }
  
  getDepartments() {
    this.employeeService.getDepartments().subscribe(
      response => {
        this.departments = response;
      }
    );
  }

  roleMatch(allowedRole: string) {
    return this.employeeService.roleMatch(allowedRole);
  }

  deleteDepartment(id: number) {
   if(this.roleMatch('ADMIN')){
    if (confirm('Are you sure you want to delete this department?')) {
      this.employeeService.deleteDepartment(id).subscribe(
        response => {
          this.departments = this.departments.filter(department => department.departmentId !== id); 
        }
      );
    }
   } else {
      alert('You do not have permission to delete department');
    }
  }

  navigateToEditDepartment(id: number) {
    this.employeeService.getDepartmentById(id).subscribe(
      response => {
        console.log(response);
        this.router.navigate([`/departments/edit-department/:${id}`]);
        this.employeeAuthService.setIdToUpdate(id);
      }
    );
  }

}
