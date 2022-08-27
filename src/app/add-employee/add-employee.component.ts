import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmployeeService } from '../_services/employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  departments: Array<Department> = new Array<Department>();


  constructor(private employeeService: EmployeeService) {
    this.getDepartments();
  }

  ngOnInit(): void {
  }

getDepartments() {
  this.employeeService.getDepartments().subscribe(data => {
    //to filter out the Admin department from the list of departments if the user is not an admin
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
    
    }, (error) => {
      console.log(error);
    }
    );
  } else {
    alert('Please fill in all the fields');
  }
}

}

class Department {
  constructor(public departmentId: number, public departmentName: string) { }
}
