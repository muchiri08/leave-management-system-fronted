import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faUserPen } from '@fortawesome/free-solid-svg-icons';
import { Leave } from '../_model/leave';
import { EmployeeAuthService } from '../_services/employee-auth.service';
import { EmployeeService } from '../_services/employee.service';

@Component({
  selector: 'app-hod-leaves',
  templateUrl: './hod-leaves.component.html',
  styleUrls: ['./hod-leaves.component.css']
})
export class HodLeavesComponent implements OnInit {

  editIcon = faUserPen;

  leaves: Array<Leave> = new Array<Leave>();

  constructor(private employeeService: EmployeeService, private employeeAuthService: EmployeeAuthService, private router: Router) { 
    this.getHodLeaves();
  }

  ngOnInit(): void {
  }

  getHodLeaves() {
    this.employeeService.getHodLeaves().subscribe(
      response => {
        this.leaves = response;
        console.log(this.leaves);
        this.router.navigate(['/hod-leaves']);
      }
    );
  }

  getLeaveRequestBtId(id: number) {
    this.employeeAuthService.setIdToUpdate(id);
  }

}
