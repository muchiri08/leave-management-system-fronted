import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faFilePen } from '@fortawesome/free-solid-svg-icons';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { LeaveType } from '../_model/leave-type';
import { EmployeeAuthService } from '../_services/employee-auth.service';
import { EmployeeService } from '../_services/employee.service';

@Component({
  selector: 'app-leaves-type',
  templateUrl: './leaves-type.component.html',
  styleUrls: ['./leaves-type.component.css']
})
export class LeavesTypeComponent implements OnInit {

  editIcon = faFilePen;
  deleteIcon = faTrashCan;

  leavesType: Array<LeaveType> = new Array<LeaveType>();

  constructor(private employeeService: EmployeeService, private router: Router, private employeeAuthService: EmployeeAuthService) { 
    this.getLeavesType();
  }

  ngOnInit(): void {
  }

  getLeavesType() {
    this.employeeService.getLeavesType().subscribe(
      response => {
        this.leavesType = response;
      }
    );
  }

  deleteLeaveType(id: number) {
    if (confirm('Are you sure you want to delete this leave type?')) {
      this.employeeService.deleteLeaveType(id).subscribe(
        response => {
          this.leavesType = this.leavesType.filter(leaveType => leaveType.leaveId !== id);
        }
      );
    }
  }

  navigateToUpdateLeaveType(id: number) {
    this.employeeAuthService.setIdToUpdate(id)
    this.router.navigate([`leaves-type/edit-leave-type/:${id}`]);
  }

  isRoleMatch(role: string){
    return this.employeeService.roleMatch(role);
  }

}
