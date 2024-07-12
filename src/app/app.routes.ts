import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserComponent } from './login/user/user.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {path:"register" , component:RegisterComponent},
     { path:"login",component:LoginComponent},
     {path:"home",component:HomeComponent}
   //  {path:"home/:status",component:HomeComponent}
   // {path:"login/user",component:UserComponent}
];
