import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
@Component({
  selector: 'app-report2-emp',
  templateUrl: './report2-emp.component.html',
  styleUrls: ['./report2-emp.component.css']
})
export class Report2EmpComponent implements OnInit {

  constructor(private service:SharedService) { }
  Employees:any=[];
  Employee_familyMembers:any=[];
  ngOnInit(): void {
    this.refreshEmps();
  }
  refreshEmps(){
    this.service.getEmployees().subscribe(data=>{
      this.Employees = data;
    })
  }
}
