import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmployeeService } from '../_services/employee.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  departments: Array<Department> = new Array<Department>();


  constructor(private employeeService: EmployeeService, private toastr: ToastrService) { 
    this.getDepartments();
  }

  ngOnInit(): void {
  }

getDepartments() {
  this.employeeService.getDepartments().subscribe(data => {
      this.departments = data;
    }
  );
}

roleMatch(allowedRole: string) {
  return this.employeeService.roleMatch(allowedRole);
}

createNewEmployee(employee: NgForm) {
  if(employee.valid) {
    this.employeeService.createNewEmployee(employee.value).subscribe((response) => {
      employee.resetForm();
      this.toastr.success('Employee added successfully');
    
    }, (error) => {
      this.toastr.error('Error adding employee');
    }
    );
  } else {
    this.toastr.error('Please fill all the fields');
  }
}

}

class Department {
  constructor(public departmentId: number, public departmentName: string) { }
}
