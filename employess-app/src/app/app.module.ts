import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DepartmentComponent } from './department/department.component';
import { ShowDelDepComponent } from './department/show-del-dep/show-del-dep.component';
import { AddEditDepComponent } from './department/add-edit-dep/add-edit-dep.component';
import { EmployeeComponent } from './employee/employee.component';
import { ShowDelEmpComponent } from './employee/show-del-emp/show-del-emp.component';
import { AddEditEmpComponent } from './employee/add-edit-emp/add-edit-emp.component';
import {SharedService} from './shared.service';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Report1EmpComponent } from './report1-emp/report1-emp.component';
import { Report2EmpComponent } from './report2-emp/report2-emp.component';
@NgModule({
  declarations: [
    AppComponent,
    DepartmentComponent,
    ShowDelDepComponent,
    AddEditDepComponent,
    EmployeeComponent,
    ShowDelEmpComponent,
    AddEditEmpComponent,
    Report1EmpComponent,
    Report2EmpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
