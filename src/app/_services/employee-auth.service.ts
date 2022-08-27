import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeAuthService {

  constructor() { }

  public setRole(role: string) {
    localStorage.setItem('role', role);
  }

  public getRole() : string {
    return localStorage.getItem('role') as string;
  }

  public setToken(jwtToken: string) {
    localStorage.setItem('jwtToken', jwtToken);
    console.log(jwtToken);
  }

  public getToken() : string {
    const token = localStorage.getItem('jwtToken') as string;
    //console.log(token);
    return token;
  }

  public setEmployeeId(id: number) {
    localStorage.setItem('employeeId', id.toString());
  }

  public getEmployeeId() : number {
    const id = localStorage.getItem('employeeId') as unknown as number;
    return id; 
  }

  public clear(){
    localStorage.clear();
  }

  public isLoggedIn() : boolean {
    // returns true if the values are not null otherwise false
    return this.getToken() !== null && this.getRole() !== null;
  }

  public setIdToUpdate(id: number) {
    localStorage.setItem('idToUpdate', id.toString());
  }
  public getIdToUpdate() : number {
    const id = localStorage.getItem('idToUpdate') as unknown as number;
    return id;
  }
}
