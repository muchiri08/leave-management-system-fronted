import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { catchError, Observable, throwError } from "rxjs";
import { EmployeeAuthService } from "../_services/employee-auth.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private employeeAuthService: EmployeeAuthService, private router: Router) { }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        if(req.headers.get('No-Auth') === 'true'){

            return next.handle(req.clone());
        }

        const token = this.employeeAuthService.getToken();

        req = this.addToken(req, token);

        return next.handle(req).pipe(
            catchError((err: HttpErrorResponse) => {
                console.log(err.status);
                if (err.status === 401) {
                    this.router.navigate(['/login']);
                } else if(err.status === 403){
                    this.router.navigate(['/forbidden']);
                } else if( err.status === 406){
                    alert('There is already an employee with this email');
                } else if(err.status === 409){
                    alert('There is already an HOD in this Department');
                } else if(err.status === 404){
                    alert('No data found');
                }
                return throwError("Something is wrong");
            })
        );

    }

    public addToken(request: HttpRequest<any>, token: string) {
        return request.clone({
            setHeaders: {
                Authorization: `Bearer ${token}`
            }
        });
    }
    
}