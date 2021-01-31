import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import {RouterModule,Routes} from '@angular/router'
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AdminComponent} from './admin/admin.component'

const routes:Routes =[
   {path:'',  redirectTo: 'login', pathMatch: 'full'},
   {path:'login', component:LoginComponent},
   {path:'signup', component:RegisterComponent},
   {path:'home', component:AdminComponent},
   {path:'**', redirectTo: 'login'}
   

]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
