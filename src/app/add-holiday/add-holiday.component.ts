import { Component, OnInit } from '@angular/core';
import { Holiday } from '../_model/holiday';
import { EmployeeService } from '../_services/employee.service';

@Component({
  selector: 'app-add-holiday',
  templateUrl: './add-holiday.component.html',
  styleUrls: ['./add-holiday.component.css']
})
export class AddHolidayComponent implements OnInit {

  holiday: Holiday = new Holiday(parseInt(''), '', '');

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
  }

  public createNewHoliday() {
    if (this.holiday.holidayDate !== "" && this.holiday.description !== "") {
      this.employeeService.createHoliday(this.holiday).subscribe(data => {
        this.holiday.holidayDate = "";
        this.holiday.description = "";
      });
    } else {
      alert('Please fill all the fields');
    }
  }

}
