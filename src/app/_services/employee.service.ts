import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Employee } from '../_model/employee';
import { EmployeeAuthService } from './employee-auth.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  API_PATH = "http://localhost:9090/api/v1/";

  requestHeader: HttpHeaders = new HttpHeaders({
    'No-Auth': 'true'
  });


  constructor(private httpClient: HttpClient, private employeeAuthService: EmployeeAuthService) { }

  public login(loginData: any) {
    return this.httpClient.post("http://localhost:9090/authenticate", loginData, { headers: this.requestHeader });
  }

  public getEmployees(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(this.API_PATH + "employees").pipe(
      map((data: any[]) =>
        data.map(
          (employee: any) =>
            new Employee(employee.id, employee.firstName, employee.lastName, employee.email, employee.gender, employee.password, employee.department, employee.role)
        )
      )
    );
  }

  public getEmployeeById(id: number) {
    return this.httpClient.get<Employee>(this.API_PATH + "employee/" + id).pipe(
      map((employee: any) =>
        new Employee(employee.id, employee.firstName, employee.lastName, employee.email, employee.gender, employee.password, employee.department, employee.role)
      )
    )
  }

  getEmployeesByDepartment(id: number) {
    return this.httpClient.get<Employee[]>(this.API_PATH + "employees-by-department/" + id).pipe(
      map((data: any[]) =>
        data.map(
          (employee: any) =>
            new Employee(employee.id, employee.firstName, employee.lastName, employee.email, employee.gender, employee.password, employee.department, employee.role)
        )
      )
    );
  }

  public roleMatch(allowedRole: string): boolean {
    let isMatch: boolean = false;
    const userRole = this.employeeAuthService.getRole();

    if (userRole != null && userRole === allowedRole) {
      isMatch = true;
      return isMatch;
    } else {
      return isMatch;
    }
  }

  public roleOk(allowedRole: string | string[]): boolean {
    let isMatch: boolean = false;
    const userRole = this.employeeAuthService.getRole();

    for (let i = 0; i < allowedRole.length; i++) {
      if (userRole === allowedRole[i]) {
        isMatch = true;
        break;
      }
    }
    return isMatch;

  }

  public createNewEmployee(employee: any) {
    return this.httpClient.post(this.API_PATH + "newEmployee", employee);
  }

  public updateEmployee(id: number, employee: any) {
    return this.httpClient.put(this.API_PATH + "update-employee/" + id, employee);
  }

  public deleteEmployee(id: any) {
    return this.httpClient.delete(this.API_PATH + "delete-employee/" + id);
  }

  public createNewDepartment(department: any) {
    return this.httpClient.post(this.API_PATH + "newDepartment", department);
  }

  public getDepartments() {
    return this.httpClient.get<[]>(this.API_PATH + "departments");
  }

  public deleteDepartment(id: number) {
    return this.httpClient.delete(this.API_PATH + "delete-department/" + id);
  }

  public getDepartmentById(id: number) {
    return this.httpClient.get<any>(this.API_PATH + "department/" + id);
  }

  public updateDepartment(id: number, department: any) {
    return this.httpClient.put(this.API_PATH + "update-department/" + id, department);
  }

  public createLeaveType(leaveType: any) {
    return this.httpClient.post(this.API_PATH + "leave/create-leave-type", leaveType);
  }

  public getLeavesType() {
    return this.httpClient.get<[]>(this.API_PATH + "leave/leave-types");
  }

  public deleteLeaveType(id: number) {
    return this.httpClient.delete(this.API_PATH + "leave/delete-leave-type/" + id);
  }

  public getLeaveTypeById(id: number) {
    return this.httpClient.get<any>(this.API_PATH + "leave/leave-type/" + id);
  }

  public updateLeaveType(id: number, leaveType: any) {
    return this.httpClient.put(this.API_PATH + "leave/update-leave-type/" + id, leaveType);
  }

  public createLeaveRequest(id: number, leave: any) {
    return this.httpClient.post(this.API_PATH + "leave/create-leave-request/" + id, leave);
  }

  public getLeaveRequests() {
    return this.httpClient.get<[]>(this.API_PATH + "leave/all-leaves");
  }

  public getLeaveRequestById(id: number) {
    return this.httpClient.get<any>(this.API_PATH + "leave/leave-request/" + id);
  }

  public updateLeaveRequest(leaveId: number, leave: any, approerId: number) {
    return this.httpClient.put(this.API_PATH + "leave/approve-leave/" + leaveId + "/" + approerId, leave);
  }

  //id is the id of the user accessing the leaves by department: HOD
  public getLeaveByDepartment(id: number) {
    return this.httpClient.get<[]>(this.API_PATH + "leave/department-leaves/" + id);
  }

  public deleteLeaveRequest(id: number) {
    return this.httpClient.delete(this.API_PATH + "leave/delete-leave/" + id);
  }

  public getHodLeaves() {
    return this.httpClient.get<[]>(this.API_PATH + "leave/hod-leaves");
  }

  public getEmployeeLeaves(id: number) {
    return this.httpClient.get<[]>(this.API_PATH + "leave/my-leaves/" + id);
  }

  public getHolidays() {
    return this.httpClient.get<[]>(this.API_PATH + "holidays");
  }

  public createHoliday(holiday: any) {
    return this.httpClient.post(this.API_PATH + "create-holiday", holiday);
  }

  public deleteHoliday(id: number) {
    return this.httpClient.delete(this.API_PATH + "delete-holiday/" + id);
  }

  public getLeaveBalance(id: number) {
    return this.httpClient.get<number>(this.API_PATH + "leave-balance/" + id);
  }

  public generateLeaveReportPdf(format: string) {
    const headers = {
      responseType: 'blob' as 'json',
      // ContentType: 'application/pdf',
      // contentDisposition: 'form-data; name=filename; filename=leave-report.pdf'
    }
    return this.httpClient.get<any>(this.API_PATH + "report/" + format, headers);
  }

}
