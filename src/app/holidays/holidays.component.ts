import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { Holiday } from '../_model/holiday';
import { EmployeeService } from '../_services/employee.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-holidays',
  templateUrl: './holidays.component.html',
  styleUrls: ['./holidays.component.css']
})
export class HolidaysComponent implements OnInit {

  deleteIcon = faTrashCan;
  holidays: Array<Holiday> = new Array<Holiday>();

  constructor(private employeeService: EmployeeService, private router: Router, private toastr: ToastrService) {
    this.getHolidays();
   }

  ngOnInit(): void {
  }

  public getHolidays() {
    this.employeeService.getHolidays().subscribe(
      (data: any) => {
        this.holidays = data;
      }
    );
  }

  public deleteHoliday(id: number){
      if(this.roleMatch('ADMIN')){
        if (confirm('Are you sure you want to delete this holiday?')) {
          this.employeeService.deleteHoliday(id).subscribe(
            (response) => {
              this.holidays = this.holidays.filter(holiday => holiday.holidayId !== id);
              this.toastr.success('Holiday deleted successfully');
            }
          )
        }
      } else {
        this.toastr.error('You are not authorized to delete a holiday!');
      }
  }

  public roleMatch(role: string){
    return this.employeeService.roleMatch(role);
  }

}
