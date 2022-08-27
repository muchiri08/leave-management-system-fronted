import { Component, OnInit } from '@angular/core';
import { Department } from '../_model/department';
import { EmployeeService } from '../_services/employee.service';

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

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
  }

  createNewDepartment(): void {
    if (this.department.departmentName != "") {
      this.employeeService.createNewDepartment(this.department).subscribe(data => {
        console.log(data);
        this.department.departmentName = "";
      }
      );
    } else {
      alert('Please fill all the fields');
    }
  }



}
