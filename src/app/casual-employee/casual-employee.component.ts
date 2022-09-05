import { Component, OnInit } from '@angular/core';
import { faArrowRightFromBracket, faCalendarDays, faList } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-casual-employee',
  templateUrl: './casual-employee.component.html',
  styleUrls: ['./casual-employee.component.css']
})
export class CasualEmployeeComponent implements OnInit {

  leaveTypeIcon = faArrowRightFromBracket;
  leaveRequestsIcon = faList;
  holidaysIcon = faCalendarDays;

  constructor() { }

  ngOnInit(): void {
  }

}
