import { Component, OnInit } from '@angular/core';
import { faArrowRightFromBracket, faCalendarDays, faHouse, faList, faUsers } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-hr',
  templateUrl: './hr.component.html',
  styleUrls: ['./hr.component.css']
})
export class HrComponent implements OnInit {

  employeesIcon = faUsers;
  departmentIcon = faHouse;
  leaveTypeIcon = faArrowRightFromBracket;
  leaveRequestsIcon = faList;
  holidaysIcon = faCalendarDays

  constructor() { }

  ngOnInit(): void {
  }

}
