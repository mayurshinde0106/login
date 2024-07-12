import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { response } from 'express';
import { error } from 'console';
import {EmployeeService} from '../Service/employee.service';
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule,RouterOutlet,RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  private apiUrl = "http://localhost:42001/SetEmployeesDetails";

  constructor(private employeeService: EmployeeService, private router: Router) {}

  employee = {
    name: '',
    email: '',
    password: ''
  }

  successMessage: string = '';
  errorMessage: string = '';
  // EmployeeService: any;

  
  
    register():void{
      
     // this.employeeService.logout();

      this.employeeService.registeremployee(this.employee).subscribe( response =>{
        this.successMessage = 'Employee registered successfully!';
        console.log(this.successMessage);

        setTimeout(()=>{
          this.router.navigate(["/login"])
        },5000)
       

      },
      () => {
        this.errorMessage='Failed to register employe';
        console.log(this.errorMessage);
      });
    }

}

// register(): void {
//   this.employeeService.registerEmployee(this.employee).subscribe(
//     response => {
//       this.successMessage = 'Employee registered successfully!';
//       console.log(this.successMessage);
//     },
//     error => {
//       this.errorMessage = 'Failed to register employee.';
//       console.log(error);
//     }
//   );
