import { Component, OnInit } from '@angular/core';
import { faUserPen } from '@fortawesome/free-solid-svg-icons';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { Leave } from '../_model/leave';
import { EmployeeAuthService } from '../_services/employee-auth.service';
import { EmployeeService } from '../_services/employee.service';

@Component({
  selector: 'app-leaves',
  templateUrl: './leaves.component.html',
  styleUrls: ['./leaves.component.css']
})
export class LeavesComponent implements OnInit {

  editIcon = faUserPen;
  deleteIcon = faTrashCan;

  leaves: Array<Leave> = new Array<Leave>();

  id: number = this.employeeAuthService.getEmployeeId();

  dates: any = {
    startDate: '',
    endDate: ''
  }

  constructor(private employeeService: EmployeeService, private employeeAuthService: EmployeeAuthService) {
    this.getLeaves();
  }

  ngOnInit(): void {
  }

  getLeaves() {
    if (this.isRole('HOD')) {
      this.employeeService.getLeaveByDepartment(this.id).subscribe(
        response => {
          this.leaves = response;
        }
      );
    }
    this.employeeService.getLeaveRequests().subscribe(
      response => {
        this.leaves = response;
      }
    );
  }

  getLeaveRequestById(id: number) {
    this.employeeAuthService.setIdToUpdate(id);
  }

  deleteLeaveRequest(id: number) {
    if (confirm("Are you sure you want to delete this leave request?")) {
      this.employeeService.deleteLeaveRequest(id).subscribe(
        response => {
          this.leaves = this.leaves.filter(leave => leave.leaveId != id);
        }
      );
    }
  }

  isRole(role: string) {
    return this.employeeService.roleMatch(role);
  }

  generateReport() {
    if (this.dates.startDate != '' && this.dates.endDate != '') {
      this.employeeService.generateLeaveReportPdf(this.dates.startDate, this.dates.endDate, "pdf").subscribe(
        response => {

          let downLoadLink = document.createElement('a');
          downLoadLink.href = window.URL.createObjectURL(new Blob([response], { type: 'application/pdf' }));

          if (response) {
            downLoadLink.setAttribute('download', 'leaves-report.pdf');
            document.body.appendChild(downLoadLink);
            downLoadLink.click();
          }

          // const theFile = new Blob([response], { type: 'application/pdf' });
          // const fileURL = URL.createObjectURL(theFile);
          // window.open(fileURL);
          //console.log("PDF generated");
        }
      );
    } else {
      alert("Please select start and end dates");
    }
  }

}
