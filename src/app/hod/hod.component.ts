import { Component, OnInit } from '@angular/core';
import { faArrowRightFromBracket, faCalendarDays, faHouse, faList, faUsers } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-hod',
  templateUrl: './hod.component.html',
  styleUrls: ['./hod.component.css']
})
export class HodComponent implements OnInit {

  employeesIcon = faUsers;
  departmentIcon = faHouse;
  leaveTypeIcon = faArrowRightFromBracket;
  leaveRequestsIcon = faList;
  holidaysIcon = faCalendarDays;

  constructor() { }

  ngOnInit(): void {
  }

}
