import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import {RouterModule,Routes} from '@angular/router'
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AdminComponent} from './admin/admin.component';
import { StudentComponent } from './student/student.component';
import { TeacherComponent } from './teacher/teacher.component';
import { AdminAccesGuard } from './admin-acces.guard';

const routes:Routes =[
   {path:'',  redirectTo: 'login', pathMatch: 'full'},
   {path:'login', component:LoginComponent},
   {path:'signup', component:RegisterComponent},
   {path:'home', 
      component:AdminComponent,
      canActivate: [AdminAccesGuard]
  },
   {path:'student/:id', component:StudentComponent},
   {path:'student', component:StudentComponent},
   {path:'teacher', component:TeacherComponent},
   { path: 'faculty', loadChildren: () => import('./faculty/faculty.module').then(m => m.FacultyModule) },
   {path:'**', redirectTo: 'login'}
   
   

]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
