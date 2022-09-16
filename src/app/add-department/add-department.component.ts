import { Component, OnInit } from '@angular/core';
import { Department } from '../_model/department';
import { EmployeeService } from '../_services/employee.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.css']
})
export class AddDepartmentComponent implements OnInit {

  department: Department = new Department(
    parseInt(''),
    ''
  );

  constructor(private employeeService: EmployeeService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  createNewDepartment(): void {
    if (this.department.departmentName != "") {
      this.employeeService.createNewDepartment(this.department).subscribe(data => {
        console.log(data);
        this.department.departmentName = "";
        this.toastr.success('Department added successfully');
      }
      );
    } else {
      this.toastr.error('Please fill all the fields');
    }
  }



}
