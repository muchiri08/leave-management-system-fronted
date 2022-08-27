import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { EmployeeAuthService } from '../_services/employee-auth.service';
import { EmployeeService } from '../_services/employee.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private employeeAuthService: EmployeeAuthService, private router:Router, private employeeService: EmployeeService) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    if(this.employeeAuthService.getToken() != null){
      const role = route.data['role'] as Array<string>;

      if(role != null){
        const match = this.employeeService.roleOk(role);
        if(match){
          return true;
        } else {
          this.router.navigate(['/forbidden']);
          return false;
        }
      }
    } 

    this.router.navigate(['/login']);
    return false;
  }
  
}
