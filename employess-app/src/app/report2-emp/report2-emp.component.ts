import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
declare var window:any;
@Component({
  selector: 'app-report2-emp',
  templateUrl: './report2-emp.component.html',
  styleUrls: ['./report2-emp.component.css']
})
export class Report2EmpComponent implements OnInit {

  constructor(private service:SharedService) { }
  EmployeeFullList:any=[];
  Employees:any=[];
  Employee_familyMembers:any=[];
  familyList:any=[];
  emp_id:string;
  familyModal:any;
  familyMemberName:string="";
  familyMemberRelation:string="";
  ngOnInit(): void {
    this.refreshEmps();
    this.familyModal = new window.bootstrap.Modal(
      document.getElementById("familyModal")
    )
  }
  deleteFamilyMember(id){
    this.service.deleteFamilyMember(id).subscribe(data=>{
      setTimeout(() => {
       this.refreshEmps(); 
      });
    })
  }
  closeClick(){
    this.familyModal.hide();
    this.refreshEmps();
  }
  openFamilyModal(emp_id:any){
    this.emp_id = emp_id;
    this.familyModal.show();
  }
  AddFamilyMember(){
    let val={
          familyMemberName: this.familyMemberName,
          familyMemberRelation: this.familyMemberRelation,
          familyMember_empID : this.emp_id
    }
   this.service.addFamilyMember(val).subscribe(data=>{
     alert(data.toString());
   })
   this.familyMemberName="";
   this.familyMemberRelation="";
  }
  refreshEmps(){
    this.service.getEmployees().subscribe(data=>{
      this.Employees = data;
      for(let i=0;i<this.Employees.length;i++){
      this.service.getFamilyMembers(this.Employees[i].emp_id).subscribe(data=>{
        this.EmployeeFullList[i] = {
          emp_id : this.Employees[i].emp_id,
          emp_photo_filename: this.Employees[i].emp_photo_filename,
          emp_firstname: this.Employees[i].emp_firstname,
          emp_lastname: this.Employees[i].emp_lastname,
          emp_age: this.Employees[i].emp_age,
          familyList:data
        }
      })
     
      }
     
    })
   
    
   
    
  }
}
