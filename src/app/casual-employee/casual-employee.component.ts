import { Component, OnInit } from '@angular/core';
import { faArrowRightFromBracket, faList } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-casual-employee',
  templateUrl: './casual-employee.component.html',
  styleUrls: ['./casual-employee.component.css']
})
export class CasualEmployeeComponent implements OnInit {

  leaveTypeIcon = faArrowRightFromBracket;
  leaveRequestsIcon = faList;

  constructor() { }

  ngOnInit(): void {
  }

}
