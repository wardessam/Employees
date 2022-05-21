import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { DepartmentComponent } from './department/department.component';
import { Report1EmpComponent } from './report1-emp/report1-emp.component';
import { Report2EmpComponent } from './report2-emp/report2-emp.component';
const routes: Routes = [
  {path:'employee',component:EmployeeComponent},
  {path:'department',component:DepartmentComponent},
  {path:'report1-emp',component:Report1EmpComponent},
  {path:'report2-emp',component:Report2EmpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
