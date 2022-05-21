import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
declare var window:any;

@Component({
  selector: 'app-show-del-emp',
  templateUrl: './show-del-emp.component.html',
  styleUrls: ['./show-del-emp.component.css']
})
export class ShowDelEmpComponent implements OnInit {

  constructor(private service:SharedService) { }

  Employees:any=[];
  formModal:any;
  familyModal:any;
  ModalTitle:string;
  emp:any;
  ngOnInit(): void {
    this.refreshEmps();
    this.formModal = new window.bootstrap.Modal(
      document.getElementById("exampleModal")
    )
    this.familyModal = new window.bootstrap.Modal(
      document.getElementById("familyModal")
    )
   
  }
  deleteEmp(item:any){
    if(confirm("Are you Sure?")){

      this.service.deleteEmployee(item.emp_id).subscribe(data=>{
       alert(data.toString());
      })
      this.refreshEmps(); 
    }
   }
   editEmp(item:any){
   this.emp=item;
   this.ModalTitle = "Edit Employee"
   
   this.formModal.show();
   
   }
   addClick(){
     this.emp={
      emp_id :0,
      emp_firstname:"",
      emp_lastname:"",
      emp_birthdate:"", 
      emp_address:"",
      emp_mobile:"",
      emp_phone:"",
      emp_dept_id:"",
      emp_photo:"unknown.jpg",
      emp_age:""
     }
     
     this.ModalTitle = "Add Employee";
     this.formModal.show();
     
  
   }
   closeClick(){
     this.formModal.hide();
     this.familyModal.hide();
     this.refreshEmps();
   }
   refreshEmps(){
     this.service.getEmployees().subscribe(data=>{
       this.Employees = data;
     })
   }
   openFamilyModal(emp_id:any){
     this.familyModal.show();
   }
   AddFamilyMember(){

   }
}
