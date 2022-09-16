import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../_services/employee.service';
import { EmployeeAuthService } from '../_services/employee-auth.service'
import { Department } from '../_model/department';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-department',
  templateUrl: './edit-department.component.html',
  styleUrls: ['./edit-department.component.css']
})
export class EditDepartmentComponent implements OnInit {

  id: number = this.employeeAuthService.getIdToUpdate();
  department: Department = new Department(
    0,
    ''
  );

  constructor(private employeeService: EmployeeService, private employeeAuthService: EmployeeAuthService, private toastr: ToastrService) { 
    this.getDepartMentById();
   }

  ngOnInit(): void {
  }

  getDepartMentById() {
    this.employeeService.getDepartmentById(this.id).subscribe(
      response => {
        this.department = response;
      }
    );
  }

  updateDepartment(department: Department){
    if(department.departmentName != ""){
      this.employeeService.updateDepartment(this.id, department).subscribe(
        response => {
          this.department.departmentName = "";
          this.toastr.success('Department updated successfully');
        }
      );
    }
  }

}
