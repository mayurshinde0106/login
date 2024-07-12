import { Component } from '@angular/core';
import { Router, RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { EmployeeService } from '../Service/employee.service';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet,RouterLink,RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor ( private router:Router,private employeeservice : EmployeeService){}
  status = {
    action : String 
  }

  
  
  changeStatus(){
     //  this.status.action=true;
     //  this.router.navigate(["/home",this.status.action]);
      this.employeeservice.logout();
      this.router.navigate(['/']);
  }
}
