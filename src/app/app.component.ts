import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { CommonModule } from '@angular/common';
import { EmployeeService } from './Service/employee.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RegisterComponent,LoginComponent,RouterLink,CommonModule,RouterModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'LoginApp';
  display: boolean = true;

  Action : string ='';
  constructor(private router: Router,private employeeService: EmployeeService) { }



  isLogin() :boolean{
    return this.employeeService.isLogin();
  }
  toLoginPage():void
  {
    this.employeeService.login();
    this.router.navigate(['/login']);
  } 
  toRegisterPage():void
  {
    this.employeeService.login();
    this.router.navigate(["/register"])
    //  this.display=false;
  }
}
