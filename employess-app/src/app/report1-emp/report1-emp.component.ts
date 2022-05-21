import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
@Component({
  selector: 'app-report1-emp',
  templateUrl: './report1-emp.component.html',
  styleUrls: ['./report1-emp.component.css']
})
export class Report1EmpComponent implements OnInit {

  constructor(private service:SharedService) { }
  Employees:any=[];
  ngOnInit(): void {
    this.refreshEmps();
  }
  refreshEmps(){
    this.service.getEmployees().subscribe(data=>{
      this.Employees = data;
    })
  }
}
