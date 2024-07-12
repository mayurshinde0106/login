import { HttpClient,HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private url='http://localhost:42001/SetEmployeesDetails';
 
  constructor(private http:HttpClient) { }

 // this.http.get<any>(`http://localhost:42001/api/GetEmployeeLogin?Email=${this.loginData.email}&Password=${this.loginData.password}`,)


  registeremployee(employee:any) : Observable<any>{
    return this.http.post<any>(this.url,employee).pipe(
      catchError(this.handleError)
    );
  }
  private handleError(error: any) :Observable<never>{
    console.error('An error is occured ',error);
    return throwError(error);
  }

  private url1='http://localhost:42001/api/GetEmployeeLogin';

  Getemployee(loginData:any): Observable<any>{

      let params = new HttpParams().set('Mail',loginData.Mail).set('Password',loginData.Password);
    return this.http.get<any>(this.url1, {params}).pipe(
      catchError(this.handleError)
    );
  }
  private loggedIn=true;

  login() {
     this.loggedIn=false;
  }

  logout() {
      this.loggedIn=true;
  }

  isLogin(): boolean{
      return this.loggedIn;
  }
  // isLoggedIn(): boolean {
  //   return this.loggedIn;
  // }
}
